import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExchangeService} from "./exchange.service";
import {Observable} from "rxjs/Observable";
import {Candle, Pair} from "../../models/pair";
import {tap} from 'rxjs/operators/tap';
import {map} from "rxjs/operators";
import {AvailableExchanges} from "../../../modules/insertions/arbitrage/available-exchanges";

@Injectable()
export class HitBTCService implements ExchangeService {
    baseUrl: string = '/hitbtc/';
    apiUrls = {
        getPairs: 'ticker',
        getCandles: ''
    };

    constructor(private _http: HttpClient) {
    }

    getPairs(): Observable<Pair[]> {
        return this._http.get(this.baseUrl + this.apiUrls.getPairs).pipe(map(resp => {
            let pairs = [];
            for (const pair of Object.keys(resp)) {
                if (resp[pair].symbol.indexOf('USD') === -1)
                    pairs.push(new Pair().of(this.getMarketCurrency(resp[pair].symbol), this.getBaseCurrency(resp[pair].symbol), AvailableExchanges.Hitbtc))
            }
            return pairs;
        }));
    }

    getCandles(): Observable<Candle[]> {
        return this._http.get(this.baseUrl + this.apiUrls.getPairs).pipe(map(resp => {
            let pairs = [];
            for (const pair of Object.keys(resp)) {
                if (resp[pair].symbol.indexOf('USD') === -1)
                    pairs.push(new Pair().of(this.getMarketCurrency(resp[pair].symbol), this.getBaseCurrency(resp[pair].symbol), AvailableExchanges.Hitbtc))
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
        return this._http.get(this.baseUrl + this.apiUrls.getPairs + '/' + pair.symbol + pair.base).pipe(map(resp => {
            return resp['last'];
        }));
    }
}
