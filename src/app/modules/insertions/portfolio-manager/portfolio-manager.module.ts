import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioManagerRoutingModule} from './portfolio-manager-routing.module';
import {PortfolioManagerComponent} from './portfolio-manager.component';

@NgModule({
  imports: [
    CommonModule,
      PortfolioManagerRoutingModule
  ],
  declarations: [PortfolioManagerComponent]
})
export class PortfolioManagerModule { }
