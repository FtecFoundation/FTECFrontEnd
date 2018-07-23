import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrpRoutingModule} from './trp-routing.module';
import {TrpComponent} from './trp.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TrpRoutingModule
  ],
  declarations: [TrpComponent]
})
export class TrpModule { }
