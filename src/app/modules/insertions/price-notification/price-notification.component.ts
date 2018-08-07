import { Component, Input, OnInit } from '@angular/core';
import { priceNotification } from './price-notification';
import { AvailableExchanges } from '../arbitrage/available-exchanges';

@Component({
  selector: 'app-social',
  templateUrl: './price-notification.component.html',
  styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', '../../account/my-exchanges/my-exchanges.component.scss', './price-notification.component.scss']
})
export class PriceNotificationComponent implements OnInit {

  exchanges = AvailableExchanges.availableStocks;
  price = priceNotification;

  constructor() {
  }

  ngOnInit() {
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 10) {
      return Math.round(value / 10) + '%';
    }

    return value;
  }

}
