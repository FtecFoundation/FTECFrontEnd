import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileAppComponent} from '../mobile-app/mobile-app.component';
import {RouterModule} from '@angular/router';
import {OrderManagerComponent} from './order-manager.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: OrderManagerComponent, data: {title: 'Order Manager'}},
        ])
    ],
    exports: [RouterModule]
})
export class OrderManagerRoutingModule { }
