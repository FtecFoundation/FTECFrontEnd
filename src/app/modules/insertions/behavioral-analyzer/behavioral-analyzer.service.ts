import { Injectable } from '@angular/core';
import {RestService} from '../../../core/services/rest.service';
import {catchError} from 'rxjs/operators/catchError';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {BehavioralDataTrades} from '../../../core/models/behavioral';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Stock} from '../arbitrage/available-exchanges';

const BehavioralApiUrls = {

    getTrades: 'cabinet/behavior/getTrades',
    getHistory: 'cabinet/behavior/getTradesHistory',
    saveKeys: 'apiKeys'

};

@Injectable()
export class BehavioralAnalyzerService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }


    getHistory(): Observable<BehavioralDataTrades> {
        return this.get('cabinet/behavior/getTradesHistory').pipe(
            map(value => value.response)
        );
    }

    getTrades(stock: Stock): Observable<BehavioralDataTrades> {
        return this.post(BehavioralApiUrls.getTrades, {'stocks' : [stock.nameToSend]}).pipe(
            map(resp => resp.response));
    }
p
}
