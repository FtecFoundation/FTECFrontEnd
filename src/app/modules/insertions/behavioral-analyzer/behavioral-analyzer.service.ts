import {Injectable} from '@angular/core';
import {RestService} from '../../../core/services/rest.service';
import {catchError} from 'rxjs/operators/catchError';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {BehavioralData, BehavioralDataTrade, BehavioralRequest} from '../../../core/models/behavioral';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Stock} from '../arbitrage/available-exchanges';

const BehavioralApiUrls = {

    getTrades: 'cabinet/behavioral_new/getTrades',
    getHistory: 'cabinet/behavioral_new/getPrevTrades',
    saveKeys: 'apiKeys'
};

@Injectable()
export class BehavioralAnalyzerService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }


    getHistory(): Observable<BehavioralData> {
        return this.get(BehavioralApiUrls.getHistory).pipe(
            map(value => value.response)
        );
    }

    getTrades(request: BehavioralRequest): Observable<BehavioralDataTrade> {
        return this.post(BehavioralApiUrls.getTrades, request).pipe(
            map(resp => resp.response));
    }

}
