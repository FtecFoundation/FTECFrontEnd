import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExchangeService} from "./exchange.service";
import {Observable} from "rxjs/Observable";
import {Pair} from "../../models/pair";
import {tap} from 'rxjs/operators/tap';
import {map} from "rxjs/operators";
import {AvailableExchanges} from "../../../modules/insertions/arbitrage/available-exchanges";

@Injectable()
export class BittrexService implements ExchangeService{
  baseUrl: string = '/bittrex/';
  apiUrls = {
    getPairs: 'getmarkets'
  };

  constructor(private _http: HttpClient) { }

  getPairs(): Observable<Pair[]> {
    return this._http.get(this.baseUrl + this.apiUrls.getPairs).pipe(map(resp => {
      let pairs = [];
      console.log(resp);
        for (const pair of resp['result']) {
            if (pair['BaseCurrency'].indexOf('USD') === -1)
            pairs.push(new Pair().of(pair['MarketCurrency'], pair['BaseCurrency'], AvailableExchanges.BitTrex))
        }
      return pairs;
    }));
  }
}
