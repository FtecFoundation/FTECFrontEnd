import { Component, Input, OnInit } from '@angular/core';
import {ReferralsComponent} from '../referrals.component';
import {AvailableExchanges} from '../../../insertions/arbitrage/available-exchanges';


@Component({
  selector: 'app-referrals-popup',
  templateUrl: './referrals-popup.component.html',
  styleUrls: ['./referrals-popup.component.scss', '../referrals.component.scss',
      '../../../insertions/order-manager/order-manager.component.scss']
})
export class ReferralsPopupComponent implements OnInit {

  exchanges = AvailableExchanges;
  wallet = true;
  balance = false;
  @Input() showPopupModal;

  constructor(private _refferalsComponent: ReferralsComponent) {
  }

  ngOnInit() {
  }

  closeModal() {
    this._refferalsComponent.showPopupModal = false;
  }

  turnWallet() {
    this.balance = false;
    this.wallet = true;
  }

  turnBalance() {
    this.wallet = false;
    this.balance = true;
  }

}
