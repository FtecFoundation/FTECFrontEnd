import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehavioralAnalyzerRoutingModule} from './behavioral-analyzer-routing.module';
import {BehavioralAnalyzerComponent} from './behavioral-analyzer.component';
import {SharedModule} from '../../../shared/shared.module';
import {BehavioralAnalyzerService} from './behavioral-analyzer.service';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        BehavioralAnalyzerRoutingModule,
    ],
    declarations: [BehavioralAnalyzerComponent],
    providers: [BehavioralAnalyzerService]
})
export class BehavioralAnalyzerModule {
}
