import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GlobalPriceAnalyzerRoutingModule} from './global-price-analyzer-routing.module';
import {GlobalPriceAnalyzerComponent} from './global-price-analyzer.component';

@NgModule({
  imports: [
    CommonModule,
      GlobalPriceAnalyzerRoutingModule
  ],
  declarations: [GlobalPriceAnalyzerComponent]
})
export class GlobalPriceAnalyzerModule { }
