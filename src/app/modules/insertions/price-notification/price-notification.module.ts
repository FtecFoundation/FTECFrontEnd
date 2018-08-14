import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceNotificationRoutingModule } from './price-notification-routing.module';
import { PriceNotificationComponent } from './price-notification.component';
import { SharedModule } from '../../../shared/shared.module';
import { SliderComponent } from '../../slider/slider.component';
import {PriceNotificationService} from "./price-notification.service";


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PriceNotificationRoutingModule
    ],
    declarations: [PriceNotificationComponent],
    providers: [PriceNotificationService]
})
export class PriceNotificationModule {
}
