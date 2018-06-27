import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehavioralAnalyzerRoutingModule} from './behavioral-analyzer-routing.module';
import {BehavioralAnalyzerComponent} from './behavioral-analyzer.component';

@NgModule({
    imports: [
        CommonModule,
        BehavioralAnalyzerRoutingModule
    ],
    declarations: [BehavioralAnalyzerComponent]
})
export class BehavioralAnalyzerModule {
}
