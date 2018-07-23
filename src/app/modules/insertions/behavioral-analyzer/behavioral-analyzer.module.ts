import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehavioralAnalyzerRoutingModule} from './behavioral-analyzer-routing.module';
import {BehavioralAnalyzerComponent} from './behavioral-analyzer.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        BehavioralAnalyzerRoutingModule,
        NgxChartsModule
    ],
    declarations: [BehavioralAnalyzerComponent]
})
export class BehavioralAnalyzerModule {
}
