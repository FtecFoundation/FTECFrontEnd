import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsBackgroundRoutingModule} from './news-background-routing.module';
import {NewsBackgroundComponent} from './news-background.component';

@NgModule({
    imports: [
        CommonModule,
        NewsBackgroundRoutingModule
    ],
    declarations: [NewsBackgroundComponent]
})
export class NewsBackgroundModule {
}
