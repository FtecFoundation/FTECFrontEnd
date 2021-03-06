import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalPriceAnalyzerRoutingModule} from './global-price-analyzer-routing.module';
import {GlobalPriceAnalyzerComponent} from './global-price-analyzer.component';
import {SharedModule} from '../../../shared/shared.module';
import {GlobalPriceAnalyzerService} from "./global-price-analyzer.service";


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        GlobalPriceAnalyzerRoutingModule
    ],
    declarations: [GlobalPriceAnalyzerComponent],
    providers: [GlobalPriceAnalyzerService]
})
export class GlobalPriceAnalyzerModule {
}
