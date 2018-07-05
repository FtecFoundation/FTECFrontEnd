import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TelegramNotActivatedComponent} from './telegram-not-activated/telegram-not-activated';
import {TelegramEnabledGuard} from '../../../core/guards/telegram-enabled.guard';
import {TelegramNotEnabledGuard} from '../../../core/guards/telegram-not-enabled.guard';
import {TelegramActivatedComponent} from './telegram-activated/telegram-activated.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: TelegramNotActivatedComponent,
                data: {title: 'Telegram Assistant'},
                canActivate: [TelegramNotEnabledGuard]
            },
            {
                path: 'settings',
                component: TelegramActivatedComponent,
                data: {title: 'Telegram Assistant Settings'},
                canActivate: [TelegramEnabledGuard]
            },
        ])
    ],
    exports: [RouterModule]
})
export class TelegramAssistantRoutingModule {
}
