import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentRoutingModule} from './payment-routing.module';
import {PaymentComponent} from './payment.component';
import {QRCodeModule} from 'angularx-qrcode';

@NgModule({
    imports: [
        CommonModule,
        PaymentRoutingModule,
        QRCodeModule
    ],
    declarations: [PaymentComponent]
})
export class PaymentModule { }
