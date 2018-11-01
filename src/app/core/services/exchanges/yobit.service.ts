import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ExchangeService} from './exchange.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AvailableExchanges} from "../../../modules/insertions/arbitrage/available-exchanges";
import {Pair} from "../../models/pair";

@Injectable()
export class YobitService implements ExchangeService {
    baseUrl = '/yobit/';
    apiUrls = {
        getPairs: 'info',
        getPrice: 'ticker'
    };

    constructor(private _http: HttpClient) {
    }

    getPairs(): Observable<Pair[]> {
        return this._http.get(this.baseUrl + this.apiUrls.getPairs).pipe(map(resp => {
            const pairs = [];
            for (const pair of Object.keys(resp['pairs'])) {
                if (pair.indexOf('usd') === -1) {
                    pairs.push(new Pair().of(this.getMarketCurrency(pair), this.getBaseCurrency(pair), AvailableExchanges.YObitNet))
                }
            }
            return pairs;
        }));
    }

    getBaseCurrency(symbol: string): string {
        return symbol.substring(symbol.indexOf('_') + 1).toUpperCase();
    }

    getMarketCurrency(symbol: string): string {
        return symbol.substring(0, symbol.indexOf('_')).toUpperCase();
    }

    getPrice(pair: Pair): Observable<number> {
      const pairToSend = pair.symbol.toLowerCase() + '_' + pair.base.toLowerCase();
        return this._http.get(this.baseUrl + this.apiUrls.getPrice + '/' + pairToSend)
          .pipe(map(resp => {
            return Number.parseFloat(resp[pairToSend].last);
        }));
    }

    decodePair(pair: string): string {
        const base = pair.substring(0, pair.indexOf('-'));
        const symbol = pair.substring(pair.indexOf('-') + 1);
        return `https://yobit.net/en/trade/${symbol}/${base}`;
    }
}
