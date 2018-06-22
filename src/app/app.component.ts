import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TitlesService} from './core/services/titles.service';

@Component({
    selector: 'app-root',
    template: `
    <router-outlet></router-outlet>`,
    styles: [],
    encapsulation: ViewEncapsulation.None
    // <app-loader></app-loader>
})
export class AppComponent implements OnInit {
    constructor(private titleService: TitlesService) {}

    ngOnInit(): void {
        this.titleService.init();
    }
}
