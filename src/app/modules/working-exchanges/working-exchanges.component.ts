import { Component, OnInit } from '@angular/core';
import {ExchangesSupport} from "./exchanges-support";

@Component({
  selector: 'app-working-exchanges',
  templateUrl: './working-exchanges.component.html',
  styleUrls: ['./working-exchanges.component.scss']
})
export class WorkingExchangesComponent implements OnInit {
  exchangesSupport = ExchangesSupport;
  exchanges_url = {
    'Binance': 'https://binance.com/',
    'Bittrex': 'https://international.bittrex.com/',
    'Bitstamp': 'https://www.bitstamp.net/',
    'HitBTC': 'https://hitbtc.com/',
    'Poloniex': 'https://poloniex.com/',
    'YoBit': 'https://yobit.net/en/',
    'Kraken': 'https://www.kraken.com/',
    'Huobi': 'https://www.huobi.co/en-us/'
  }
  constructor() { }

  ngOnInit() {
  }

  getKeys(obj: any): any {
      return Object.keys(obj);
  }

}
