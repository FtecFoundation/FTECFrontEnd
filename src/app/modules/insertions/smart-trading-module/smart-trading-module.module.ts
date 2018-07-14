import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SmartTradingModuleRoutingModule} from './smart-trading-module-routing.module';
import {SmartTradingModuleComponent} from './smart-trading-module.component';

@NgModule({
  imports: [
    CommonModule,
      SmartTradingModuleRoutingModule
  ],
  declarations: [SmartTradingModuleComponent]
})
export class SmartTradingModuleModule { }
