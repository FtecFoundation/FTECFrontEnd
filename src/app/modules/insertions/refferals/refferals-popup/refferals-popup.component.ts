import { Component, Input, OnInit } from '@angular/core';
import { availableExchanges } from '../../arbitrage/available-exchanges';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-refferals-popup',
  templateUrl: './refferals-popup.component.html',
  styleUrls: ['./refferals-popup.component.scss', '../refferals.component.scss']
})
export class RefferalsPopupComponent implements OnInit {

  exchanges = availableExchanges;
  @Input() showPopupModal;

  constructor() {
  }

  ngOnInit() {
  }

  closeModal() {
    this.showPopupModal = false;
  }

}
