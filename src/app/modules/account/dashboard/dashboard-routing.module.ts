import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ArbitrageComponent} from '../../insertions/arbitrage/arbitrage.component';
import {DashboardComponent} from './dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
        ])
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
