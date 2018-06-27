import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrpRoutingModule} from './trp-routing.module';
import {TrpComponent} from './trp.component';

@NgModule({
  imports: [
    CommonModule,
      TrpRoutingModule
  ],
  declarations: [TrpComponent]
})
export class TrpModule { }
