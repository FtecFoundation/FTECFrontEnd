import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TelegramAssistantRoutingModule} from './telegram-assistant-routing.module';
import {TelegramNotActivatedComponent} from './telegram-not-activated/telegram-not-activated';
import {QRCodeModule} from 'angularx-qrcode';
import {TelegramAssistantService} from './telegram-assistant.service';
import { TelegramActivatedComponent } from './telegram-activated/telegram-activated.component';
import {TelegramEnabledGuard} from '../../../core/guards/telegram-enabled.guard';
import {TelegramNotEnabledGuard} from '../../../core/guards/telegram-not-enabled.guard';

@NgModule({
    imports: [
        CommonModule,
        TelegramAssistantRoutingModule,
        QRCodeModule
    ],
    declarations: [TelegramNotActivatedComponent, TelegramActivatedComponent],
    providers: [TelegramAssistantService, TelegramEnabledGuard, TelegramNotEnabledGuard]
})
export class TelegramAssistantModule { }
