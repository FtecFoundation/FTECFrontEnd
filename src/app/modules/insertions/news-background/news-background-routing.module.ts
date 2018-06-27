import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileAppComponent} from '../mobile-app/mobile-app.component';
import {RouterModule} from '@angular/router';
import {NewsBackgroundComponent} from './news-background.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: NewsBackgroundComponent, data: {title: 'News Background Analyzer'}},
        ])
    ],
    exports: [RouterModule]
})
export class NewsBackgroundRoutingModule { }
