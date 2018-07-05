import { Component, Input, OnInit } from '@angular/core';
import { globalPriceAnalyzer } from './global-price-analyzer';


@Component({
  selector: 'app-social',
  templateUrl: './global-price-analyzer.component.html',
  styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', "../my-exchanges/my-exchanges.component.scss", '../price-notification/price-notification.component.scss', "../order-manager/order-manager.component.scss", "./global-price-analyzer.component.scss"]
})
export class GlobalPriceAnalyzerComponent implements OnInit {

  price = globalPriceAnalyzer;

  constructor() {
  }

  ngOnInit() {
  }

}
