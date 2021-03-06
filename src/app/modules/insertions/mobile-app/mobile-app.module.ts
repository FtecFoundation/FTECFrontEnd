import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileAppRoutingModule} from './mobile-app-routing.module';
import {MobileAppComponent} from './mobile-app.component';

@NgModule({
  imports: [
    CommonModule,
      MobileAppRoutingModule
  ],
  declarations: [MobileAppComponent]
})
export class MobileAppModule { }
