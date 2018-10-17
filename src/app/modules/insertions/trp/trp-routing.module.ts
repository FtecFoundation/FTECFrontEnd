import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {VolumeAnalyzerRoutingModule} from '../volume-analyzer/volume-analyzer-routing.module';
import {TrpComponent} from './trp.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: TrpComponent, data: {title: 'Trading Recommendation Platform'}},
            {path: ':id', component: TrpComponent, data: {title: 'Trading Recommendation Platform'}}
        ])
    ],
    exports: [RouterModule]
})
export class TrpRoutingModule { }
