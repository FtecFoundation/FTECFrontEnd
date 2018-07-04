import { NgModule } from '@angular/core';
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
