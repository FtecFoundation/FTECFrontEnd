import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrpRoutingModule} from './trp-routing.module';
import {TrpComponent} from './trp.component';
import {SharedModule} from '../../../shared/shared.module';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {TrpService} from "./trp.service";
import { CreateRecommendationComponent } from './create-recommendation/create-recommendation.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TrpRoutingModule,
        NgxChartsModule
    ],
    declarations: [TrpComponent, CreateRecommendationComponent],
    providers: [TrpService]
})
export class TrpModule {
}
