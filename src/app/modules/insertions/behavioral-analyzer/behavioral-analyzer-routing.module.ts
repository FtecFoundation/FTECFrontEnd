import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileAppComponent} from '../mobile-app/mobile-app.component';
import {RouterModule} from '@angular/router';
import {BehavioralAnalyzerComponent} from './behavioral-analyzer.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: BehavioralAnalyzerComponent, data: {title: 'Behavioral Analyzer'}},
        ])
    ],
    exports: [RouterModule]
})
export class BehavioralAnalyzerRoutingModule { }
