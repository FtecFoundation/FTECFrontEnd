import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ChangeLogComponent} from '../change-log/change-log.component';
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
