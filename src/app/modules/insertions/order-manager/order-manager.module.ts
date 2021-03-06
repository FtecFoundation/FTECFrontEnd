import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderManagerRoutingModule } from './order-manager-routing.module';
import { OrderManagerComponent } from './order-manager.component';
import { SharedModule } from '../../../shared/shared.module';
import { SliderComponent } from '../../slider/slider.component';
import {OrderManagerService} from "./order-manager.service";


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        OrderManagerRoutingModule
    ],
    declarations: [OrderManagerComponent],
    providers: [OrderManagerService]
})
export class OrderManagerModule {
}