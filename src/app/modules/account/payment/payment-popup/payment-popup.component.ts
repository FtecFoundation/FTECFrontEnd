import { Component, Input, OnInit } from '@angular/core';
import {PaymentComponent} from '../payment.component';
import {AvailableExchanges} from '../../../insertions/arbitrage/available-exchanges';


@Component({
  selector: 'app-payment-popup',
  templateUrl: './payment-popup.component.html',
  styleUrls: ['./payment-popup.component.scss', '../payment.component.scss',
      '../../../insertions/order-manager/order-manager.component.scss']
})
export class PaymentPopupComponent implements OnInit {

  exchanges = AvailableExchanges.availableStocks;

  @Input() showPopupModal;

  constructor(private _paymentComponent: PaymentComponent) {
  }

  ngOnInit() {
  }

  closeModal() {
    this._paymentComponent.showPopupModal = false;
  }


}
