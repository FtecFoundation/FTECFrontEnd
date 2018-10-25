import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrpRoutingModule} from './trp-routing.module';
import {TrpComponent} from './trp.component';
import {SharedModule} from '../../../shared/shared.module';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {TrpService} from "./trp.service";
import {CreateRecommendationComponent} from './create-recommendation/create-recommendation.component';
import {MyRecommendationsComponent} from './my-recommendations/my-recommendations.component';
import {RecommendationComponent} from './recommendation/recommendation.component';
import {AllRecommendationsComponent} from './all-recommendations/all-recommendations.component';
import { RecommendationViewComponent } from './recommendation-view/recommendation-view.component';
import { FilterRecommendationsComponent } from './filter-recommendations/filter-recommendations.component';
import {NgDatepickerModule} from "ng2-datepicker";


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TrpRoutingModule,
        NgxChartsModule,
        NgDatepickerModule
    ],
    declarations: [TrpComponent, CreateRecommendationComponent, MyRecommendationsComponent, RecommendationComponent, AllRecommendationsComponent, RecommendationViewComponent, FilterRecommendationsComponent],
    providers: [TrpService]
})
export class TrpModule {
}
