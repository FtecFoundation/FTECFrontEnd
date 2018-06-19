import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrpComponent} from '../trp/trp.component';
import {RouterModule} from '@angular/router';
import {TelegramAssistantComponent} from './telegram-assistant.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: TelegramAssistantComponent, data: {title: 'Telegram Assistant'}},
        ])
    ],
    exports: [RouterModule]
})
export class TelegramAssistantRoutingModule { }
