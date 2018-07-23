import {NgModule} from '@angular/core';
import {PaymentComponent} from './payment.component';
import {RouterModule} from '@angular/router';



@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: PaymentComponent, data: {title: 'Payment'}},
        ])
    ],
    exports: [RouterModule]
})
export class PaymentRoutingModule {
}
