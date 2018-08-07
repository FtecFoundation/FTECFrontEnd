import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceNotificationRoutingModule } from './price-notification-routing.module';
import { PriceNotificationComponent } from './price-notification.component';
import { SharedModule } from '../../../shared/shared.module';
import { SliderComponent } from '../../slider/slider.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PriceNotificationRoutingModule
    ],
    declarations: [PriceNotificationComponent,
        SliderComponent]
})
export class PriceNotificationModule {
}
