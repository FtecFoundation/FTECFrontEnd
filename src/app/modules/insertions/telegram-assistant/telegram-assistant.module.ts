import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TelegramAssistantRoutingModule} from './telegram-assistant-routing.module';
import {TelegramAssistantComponent} from './telegram-assistant.component';

@NgModule({
  imports: [
    CommonModule,
      TelegramAssistantRoutingModule,
  ],
  declarations: [TelegramAssistantComponent]
})
export class TelegramAssistantModule { }
