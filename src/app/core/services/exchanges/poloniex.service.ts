import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ExchangeService} from "./exchange.service";
import {Observable} from "rxjs/Observable";
import {Pair} from "../../models/pair";
import {tap} from 'rxjs/operators/tap';
import {map} from "rxjs/operators";
import {AvailableExchanges} from "../../../modules/insertions/arbitrage/available-exchanges";

@Injectable()
export class PoloniexService implements ExchangeService {
    baseUrl: string = 'https://poloniex.com/public';
    apiUrls = {
        getPairs: 'returnTicker'
    };

    constructor(private _http: HttpClient) {
    }

    getPairs(all ?: boolean): Observable<Pair[]> {
        const param = new HttpParams().set('command', this.apiUrls.getPairs);
        return this._http.get(this.baseUrl, {params: param}).pipe(map(resp => {
            let pairs = [];
            for (const pair of Object.keys(resp)) {
                if (all || pair.indexOf('USD') === -1)
                    pairs.push(new Pair().of(this.getMarketCurrency(pair), this.getBaseCurrency(pair), AvailableExchanges.Poloniex))
            }
            console.log(pairs);
            return pairs;
        }));
    }


    getBaseCurrency(symbol: string): string {
        return symbol.substring(0, symbol.indexOf('_'));
    }

    getMarketCurrency(symbol: string): string {
        return symbol.substring(symbol.indexOf('_') + 1);
    }

    getPrice(pair: Pair): Observable<number> {
        const param = new HttpParams().set('command', this.apiUrls.getPairs);
        return this._http.get(this.baseUrl, {params: param}).pipe(map(resp => resp[pair.base + '_' + pair.symbol].last));
    }

    decodePair(pair: string): string {
        const base = pair.substring(0, pair.indexOf('-'));
        const symbol = pair.substring(pair.indexOf('-') + 1);
        return `https://poloniex.com/exchange#${base.toLowerCase()}_${symbol.toLowerCase()}`;
    }
}
