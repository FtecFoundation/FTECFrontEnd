import { Component, OnInit } from '@angular/core';
import {InfoService} from "../../core/services/info.service";

export const Modules = {
    "Arbitrage": 'Arbitrage Assistant',
    "Behavioral": 'Behavioral Analyzer',
    "Cryptoacademy": 'Cryptoacademy',
    "GlobalPriceAnalyzer": 'Global Price Analyzer',
    "OrderManager": 'Order Manager',
    "PortfolioManager": 'Portfolio Manager',
    "PriceNotification": 'Price Notification',
    "TradeRecommendation": 'TRP',
    "Trading": 'Smart Trading Modules',
    "VolumeAnalyzer": 'Volume Analyzer'
};

@Component({
  selector: 'app-working-exchanges',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  modules = Modules;
  prices;

    constructor(private infoService: InfoService) { }

  ngOnInit() {
      this.infoService.getPrices().subscribe(data => this.prices = data);
  }

  getKeys(obj: any): any {
      return Object.keys(obj);
  }

}
