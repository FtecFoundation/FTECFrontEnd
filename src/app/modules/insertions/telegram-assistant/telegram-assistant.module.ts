import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TelegramAssistantRoutingModule} from './telegram-assistant-routing.module';
import {TelegramNotActivatedComponent} from './telegram-not-activated/telegram-not-activated';
import {QRCodeModule} from 'angularx-qrcode';
import {TelegramAssistantService} from './telegram-assistant.service';
import { TelegramActivatedComponent } from './telegram-activated/telegram-activated.component';
import {TelegramEnabledGuard} from '../../../core/guards/telegram-enabled.guard';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        TelegramAssistantRoutingModule,
        QRCodeModule,
        SharedModule
    ],
    declarations: [TelegramNotActivatedComponent, TelegramActivatedComponent],
    providers: [TelegramAssistantService, TelegramEnabledGuard]
})
export class TelegramAssistantModule { }
