import { Component, Input, OnInit } from '@angular/core';
import { priceNotification } from './price-notification';

@Component({
  selector: 'app-social',
  templateUrl: './price-notification.component.html',
  styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', './price-notification.component.scss']
})
export class PriceNotificationComponent implements OnInit {

  price = priceNotification;

  constructor() {
  }

  ngOnInit() {
  }

}
