import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsBackgroundRoutingModule} from './news-background-routing.module';
import {NewsBackgroundComponent} from './news-background.component';
import { SharedModule } from '../../../shared/shared.module';
import {NewsBackgroundService} from "./news-background.service";


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NewsBackgroundRoutingModule
    ],
    declarations: [NewsBackgroundComponent],
    providers: [NewsBackgroundService]
})
export class NewsBackgroundModule {
}
