import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentRoutingModule} from './payment-routing.module';
import {PaymentComponent} from './payment.component';
import {QRCodeModule} from 'angularx-qrcode';
import { PaymentPopupComponent } from './payment-popup/payment-popup.component';
import { SharedModule } from '../../../shared/shared.module';
import {PaymentService} from "../../../core/services/payment.service";


@NgModule({
    imports: [
        CommonModule,
        PaymentRoutingModule,
        QRCodeModule,
        SharedModule
    ],
    declarations: [PaymentComponent,
        PaymentPopupComponent]
})
export class PaymentModule { }
