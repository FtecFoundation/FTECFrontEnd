import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderManagerRoutingModule} from './order-manager-routing.module';
import {OrderManagerComponent} from './order-manager.component';

@NgModule({
    imports: [
        CommonModule,
        OrderManagerRoutingModule
    ],
    declarations: [OrderManagerComponent]
})
export class OrderManagerModule {
}
