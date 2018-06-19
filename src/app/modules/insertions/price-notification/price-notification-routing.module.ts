import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileAppComponent} from '../mobile-app/mobile-app.component';
import {RouterModule} from '@angular/router';
import {PriceNotificationComponent} from './price-notification.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: PriceNotificationComponent, data: {title: 'Module of Price Notification'}},
        ])
    ],
    exports: [RouterModule]
})
export class PriceNotificationRoutingModule { }
