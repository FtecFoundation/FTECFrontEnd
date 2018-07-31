import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TitlesService} from './core/services/titles.service';
import {LoaderService} from './core/loader/loader.service';
import {CurrentUserService} from './core/services/current-user.service';

@Component({
    selector: 'app-root',
    template:
            `
        <app-loader *ngIf="loaderService.loading"></app-loader>
        <router-outlet></router-outlet>`,

    styles: [],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    oldConsole: any;
    constructor(private titleService: TitlesService, public loaderService: LoaderService) {
    }

    ngOnInit(): void {
        const temp = this.loaderService;
        this.titleService.init();
        let el = document.getElementById('particles-background');
        let el2 = document.getElementById('particles-foreground');
        setTimeout(function () {
            temp.hideLoader();
            el.style.display = 'none';
            el2.style.display = 'none';
        }, 3000);
    }
}
