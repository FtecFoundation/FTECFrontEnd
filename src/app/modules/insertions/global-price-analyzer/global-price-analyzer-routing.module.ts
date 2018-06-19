import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileAppComponent} from '../mobile-app/mobile-app.component';
import {RouterModule} from '@angular/router';
import {GlobalPriceAnalyzerComponent} from './global-price-analyzer.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: GlobalPriceAnalyzerComponent, data: {title: 'Global Price Analyzer'}},
        ])
    ],
    exports: [RouterModule]
})
export class GlobalPriceAnalyzerRoutingModule { }
