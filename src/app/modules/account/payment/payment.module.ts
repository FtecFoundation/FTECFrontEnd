import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentRoutingModule} from './payment-routing.module';
import {PaymentComponent} from './payment.component';
import {QRCodeModule} from 'angularx-qrcode';
import { PaymentPopupComponent } from './payment-popup/payment-popup.component';


@NgModule({
    imports: [
        CommonModule,
        PaymentRoutingModule,
        QRCodeModule,
    ],
    declarations: [PaymentComponent,
        PaymentPopupComponent]
})
export class PaymentModule { }
