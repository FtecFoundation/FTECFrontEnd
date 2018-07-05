import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {SmartTradingModuleComponent} from './smart-trading-module.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: SmartTradingModuleComponent, data: {title: 'Smart Trading Module'}},
        ])
    ],
    exports: [RouterModule]
})
export class SmartTradingModuleRoutingModule { }
