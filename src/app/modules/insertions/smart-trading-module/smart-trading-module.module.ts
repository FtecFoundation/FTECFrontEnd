import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SmartTradingModuleRoutingModule} from './smart-trading-module-routing.module';
import {SmartTradingModuleComponent} from './smart-trading-module.component';
import {SmartTradingModuleService} from "./smart-trading-module.service";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
      SharedModule,
      SmartTradingModuleRoutingModule
  ],
  declarations: [SmartTradingModuleComponent],
    providers: [SmartTradingModuleService]
})
export class SmartTradingModuleModule { }
