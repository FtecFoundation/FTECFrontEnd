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
    constructor(private titleService: TitlesService, public loaderService: LoaderService) {
    }

    ngOnInit(): void {
        const temp = this.loaderService;
        this.titleService.init();

        setTimeout(function () {
            temp.hideLoader();
        }, 3000);
    }
}
