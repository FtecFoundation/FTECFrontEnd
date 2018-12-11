import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ExchangeService} from "./exchange.service";
import {Observable} from "rxjs/Observable";
import {Candle, Pair} from "../../models/pair";
import {tap} from 'rxjs/operators/tap';
import {map} from "rxjs/operators";
import {AvailableExchanges} from "../../../modules/insertions/arbitrage/available-exchanges";
import {CurrencyTop} from "../../../modules/insertions/portfolio-manager/currency-top";
import {catchError} from "rxjs/operators";

@Injectable()
export class BittrexService implements ExchangeService {
    baseUrl: string = '/bittrex/';
    apiUrls = {
        getPairs: 'getmarkets',
        getPrice: 'getticker'
    };

    cash: any = {};

    constructor(private _http: HttpClient) {
    }

    getPairs(all ?: boolean): Observable<Pair[]> {
        return this._http.get(this.baseUrl + this.apiUrls.getPairs).pipe(map(resp => {
            let pairs = [];
            console.log("bittrex", resp);
            for (const pair of resp['result']) {
                if (all || pair['BaseCurrency'].indexOf('USD') === -1)
                    pairs.push(new Pair().of(pair['MarketCurrency'], pair['BaseCurrency'], AvailableExchanges.BitTrex))
            }
            return pairs;
        }));
    }

    getPrice(pair: Pair): Observable<number> {
        let param = new HttpParams().set('market', pair.base + '-' + pair.symbol);
        return this._http.get(this.baseUrl + this.apiUrls.getPrice, {params: param}).pipe(map(resp => {
            return Number.parseFloat(resp['result']['Last']);
        }));
    }

    getCandles(pair: Pair, interval: string): Observable<any> {
        let param = new HttpParams().set('marketName', pair.base + '-' + pair.symbol).set('tickInterval', interval);
        return this._http.get('/bittrex/market/GetTicks', {params: param}).pipe(map(resp => {
            return resp['result'].slice(resp['result'].length - 100);
        }));
    }

    getPriceData(currency: string, interval: string): Observable<any> {
        if (this.cash[currency]) return Observable.of(this.cash[currency]);

        const params = new HttpParams().set('marketName', 'BTC-' + currency).set('tickInterval', interval);
        return this._http.get('/bittrex/market/GetTicks', {params: params}).pipe(map(resp => {
            this.cash[currency] = resp['result'];
            return resp['result'];
        }));
    }

    decodePair(pair: string): string {
        return `https://bittrex.com/Market/Index?MarketName=${pair}`;
    }
}
