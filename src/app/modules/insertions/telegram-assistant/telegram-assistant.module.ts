import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TelegramAssistantRoutingModule} from './telegram-assistant-routing.module';
import {TelegramAssistantComponent} from './telegram-assistant.component';
// import {QRCodeModule} from 'angular2-qrcode';

@NgModule({
  imports: [
    CommonModule,
      TelegramAssistantRoutingModule,
      // QRCodeModule
  ],
  declarations: [TelegramAssistantComponent]
})
export class TelegramAssistantModule { }
