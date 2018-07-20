import { Component, Input, OnInit } from '@angular/core';
import { availableExchanges } from '../../arbitrage/available-exchanges';
import { Injectable } from '@angular/core';
import {RefferalsComponent} from '../refferals.component';


@Component({
  selector: 'app-refferals-popup',
  templateUrl: './refferals-popup.component.html',
  styleUrls: ['./refferals-popup.component.scss', '../refferals.component.scss', '../../order-manager/order-manager.component.scss']
})
export class RefferalsPopupComponent implements OnInit {

  exchanges = availableExchanges;
  wallet = true;
  balance = false;
  @Input() showPopupModal;

  constructor(private _refferalsComponent: RefferalsComponent) {
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
