import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioManagerRoutingModule} from './portfolio-manager-routing.module';
import {PortfolioManagerComponent} from './portfolio-manager.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
      PortfolioManagerRoutingModule
  ],
  declarations: [PortfolioManagerComponent]
})
export class PortfolioManagerModule { }
