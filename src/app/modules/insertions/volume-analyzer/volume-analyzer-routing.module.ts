import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {VolumeAnalyzerComponent} from './volume-analyzer.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: VolumeAnalyzerComponent, data: {title: 'Volume Analyzer'}},
        ])
    ],
    exports: [RouterModule]
})
export class VolumeAnalyzerRoutingModule { }
