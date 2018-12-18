import {Injectable} from '@angular/core';
import {RestService} from "../../../core/services/rest.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {SmartTradingData, SmartTradingPreferences} from "../../../core/models/smart-trading";
import {map} from "rxjs/operators";

enum SmartTradingApiUrls {
    preferences = 'modules/trade/preferences',
    history = 'modules/trade/history',
    stats = 'modules/trade/botStats',
    historyProfits = 'modules/trade/history/profits'
}

@Injectable()
export class SmartTradingModuleService extends RestService {

    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    getPreferences(exchange: string): Observable<SmartTradingPreferences> {
        const param = new HttpParams().set('stock', exchange);
        return this.get(SmartTradingApiUrls.preferences, param).pipe(map(resp => resp.response.preferences));
    }

    setPreferences(data: SmartTradingPreferences): Observable<SmartTradingPreferences> {
        return this.post(SmartTradingApiUrls.preferences, data);
    }

    getHistory(page?: number): Observable<SmartTradingData[]> {
        const param = new HttpParams().set('page', '' + page);
        return this.get(SmartTradingApiUrls.history, param).pipe(map(resp => resp.response));
    }

    getHistoryProfits(depth: string): Observable<any[]>{
        const param = new HttpParams().set('depth', depth);
        return this.get(SmartTradingApiUrls.historyProfits, param).pipe(map(resp => resp.response));
    }

    getStats(): Observable<any> {
        return this.get(SmartTradingApiUrls.stats).pipe(map(resp => resp.response));
    }

}
