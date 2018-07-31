import { Component, Input, OnInit } from '@angular/core';
import { orderManager } from './order-manager';
import { AvailableExchanges } from '../arbitrage/available-exchanges';


@Component({
  selector: 'app-social',
  templateUrl: './order-manager.component.html',
  styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', '../../account/my-exchanges/my-exchanges.component.scss', '../price-notification/price-notification.component.scss', './order-manager.component.scss']
})
export class OrderManagerComponent implements OnInit {

  order = orderManager;
  exchanges = AvailableExchanges;

  constructor() {
  }

  ngOnInit() {
  }

}
