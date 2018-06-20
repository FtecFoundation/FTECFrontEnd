import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PriceNotificationRoutingModule} from './price-notification-routing.module';
import {PriceNotificationComponent} from './price-notification.component';

@NgModule({
    imports: [
        CommonModule,
        PriceNotificationRoutingModule
    ],
    declarations: [PriceNotificationComponent]
})
export class PriceNotificationModule {
}
