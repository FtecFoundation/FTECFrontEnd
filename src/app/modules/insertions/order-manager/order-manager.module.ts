import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderManagerRoutingModule} from './order-manager-routing.module';
import {OrderManagerComponent} from './order-manager.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        OrderManagerRoutingModule
    ],
    declarations: [OrderManagerComponent]
})
export class OrderManagerModule {
}
