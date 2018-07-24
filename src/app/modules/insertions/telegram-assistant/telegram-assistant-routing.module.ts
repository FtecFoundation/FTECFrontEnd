import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TelegramNotActivatedComponent} from './telegram-not-activated/telegram-not-activated';
import {TelegramEnabledGuard} from '../../../core/guards/telegram-enabled.guard';
import {TelegramActivatedComponent} from './telegram-activated/telegram-activated.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: TelegramNotActivatedComponent,
                data: {title: 'Telegram Assistant', 'redirectToIfEnabled': '/modules/telegram-assistant/settings'},
                // canActivate: [TelegramEnabledGuard],

            },
            {
                path: 'settings',
                component: TelegramActivatedComponent,
                data: {title: 'Telegram Assistant Settings', 'redirectToIfNotEnabled': '/modules/telegram-assistant'},
                // canActivate: [TelegramEnabledGuard]
            },
        ])
    ],
    exports: [RouterModule]
})
export class TelegramAssistantRoutingModule {
}
