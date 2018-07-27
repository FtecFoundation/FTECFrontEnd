import { Component, Input, OnInit } from '@angular/core';
import { priceNotification } from './price-notification';
import { AvailableExchanges } from '../arbitrage/available-exchanges';

@Component({
  selector: 'app-social',
  templateUrl: './price-notification.component.html',
  styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', '../../account/my-exchanges/my-exchanges.component.scss', './price-notification.component.scss']
})
export class PriceNotificationComponent implements OnInit {

  exchanges = AvailableExchanges.availibleStocks;
  price = priceNotification;

  constructor() {
  }

  ngOnInit() {
  }

}
