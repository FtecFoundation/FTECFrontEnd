import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExchangeService} from "./exchange.service";
import {Observable} from "rxjs/Observable";
import {Pair} from "../../models/pair";
import {tap} from 'rxjs/operators/tap';

@Injectable()
export class BinanceService implements ExchangeService{
  baseUrl: string = 'https://bittrex.com/api/v1.1/public/';
  apiUrls = {
    getPairs: 'getmarkets'
  };

  constructor(private _http: HttpClient) { }

  getPairs(): Observable<any> {
    return this._http.get(this.baseUrl + this.apiUrls.getPairs).pipe(tap(resp => {
      let pairs = [];
      for (const pair of resp){
        this.getBaseCurrency(pair.symbol);
        this.getCurrency(pair.symbol);
        }
    }));
  }

  getBaseCurrency(symbol: string) {
    console.log(symbol.substring(symbol.length - 4, symbol.length - 1));
    return symbol.substring(symbol.length - 4, symbol.length - 1);
  }

    getCurrency(symbol: string) {
        console.log(symbol.substring(symbol.length - 4));
        return symbol.substring(symbol.length - 4);
    }
}
