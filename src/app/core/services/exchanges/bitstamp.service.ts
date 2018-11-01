import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ExchangeService} from "./exchange.service";
import {Observable} from "rxjs/Observable";
import {Pair} from "../../models/pair";
import {tap} from 'rxjs/operators/tap';
import {map} from "rxjs/operators";
import {AvailableExchanges} from "../../../modules/insertions/arbitrage/available-exchanges";

@Injectable()
export class BitstampService implements ExchangeService {
    baseUrl: string = '';
    apiUrls = {
        getPairs: 'ticker/allPrices',
        getPrice: 'ticker/price'
    };

    constructor(private _http: HttpClient) {
    }

    getPairs(): Observable<Pair[]> {
        return Observable.of();
    }


    getPrice(pair: Pair): Observable<number> {
        return Observable.of();
    }

    decodePair(pair: string): string {
        const base = pair.substring(0, pair.indexOf('-'));
        const symbol = pair.substring(pair.indexOf('-') + 1);
        return `https://bitstamp.net`;
    }
}
