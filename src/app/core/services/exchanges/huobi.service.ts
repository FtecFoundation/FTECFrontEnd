import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ExchangeService} from "./exchange.service";
import {Observable} from "rxjs/Observable";
import {Pair} from "../../models/pair";
import {tap} from 'rxjs/operators/tap';
import {map} from "rxjs/operators";
import {AvailableExchanges} from "../../../modules/insertions/arbitrage/available-exchanges";

@Injectable()
export class HuobiService implements ExchangeService {
    baseUrl: string = '/binance/';
    apiUrls = {
        getPairs: 'ticker/allPrices',
        getPrice: 'ticker/price'
    };

    cash: any = {};

    constructor(private _http: HttpClient) {
    }

    getPairs(): Observable<Pair[]> {
        return this._http.get(this.baseUrl + this.apiUrls.getPairs).pipe(map(resp => {
            let pairs = [];
            for (const pair of Object.keys(resp)) {
                if (resp[pair].symbol.indexOf('USD') === -1)
                    pairs.push(new Pair().of(this.getMarketCurrency(resp[pair].symbol), this.getBaseCurrency(resp[pair].symbol), AvailableExchanges.Binance))
            }
            return pairs;
        }));
    }

    getBaseCurrency(symbol: string): string {
        return symbol.substring(symbol.length - 3);
    }

    getMarketCurrency(symbol: string): string {
        return symbol.substring(0, symbol.length - 3);
    }

    getPrice(pair: Pair): Observable<number> {
        let param = new HttpParams().set('symbol', pair.symbol + pair.base);
        return this._http.get(this.baseUrl + this.apiUrls.getPrice, {params: param}).pipe(map(resp => {
            return Number.parseFloat(resp['price']);
        }));
    }

    getPriceData(currency: string, interval: string): Observable<any> {
        if (this.cash[currency]) return Observable.of(this.cash[currency]);

        const params = new HttpParams().set('symbol', currency + 'BTC').set('interval', interval);
        return this._http.get('/binance/klines', {params: params}).pipe(map(resp => {
            this.cash[currency] = resp;
            return resp;
        }));
    }

    decodePair(pair: string): string {
        const base = pair.substring(0, pair.indexOf('-'));
        const symbol = pair.substring(pair.indexOf('-') + 1);
        return `https://www.huobi.com/en-us/${symbol}_${base}/exchange/`;
    }
}
