import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioManagerRoutingModule} from './portfolio-manager-routing.module';
import {PortfolioManagerComponent} from './portfolio-manager.component';
import { SharedModule } from '../../../shared/shared.module';
import {PortfolioManagerService} from "./portfolio-manager.service";
import {NgxChartsModule} from "@swimlane/ngx-charts";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
      PortfolioManagerRoutingModule,
      NgxChartsModule
  ],
  declarations: [PortfolioManagerComponent],
    providers: [PortfolioManagerService]
})
export class PortfolioManagerModule { }
