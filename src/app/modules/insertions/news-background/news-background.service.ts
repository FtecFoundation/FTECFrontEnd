import {Injectable} from '@angular/core';
import {RestService} from "../../../core/services/rest.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {NewsBackgroundResults} from "../../../core/models/news-background";
import {Pagination} from "../../../core/models/pagination";

enum NewsBackgroundApiUrls {
    setCoins = 'cabinet/newsAnalyzer/setupCoins',
    subscribe = 'cabinet/newsAnalyzer/subscribe',
    settings = 'cabinet/newsAnalyzer/settings',
    results = 'cabinet/newsAnalyzer/result',
    update = 'cabinet/newsAnalyzer/latestResult'
}

@Injectable()
export class NewsBackgroundService extends RestService {
    pagination: Pagination;

    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    subscribe(): Observable<Date> {
        return this.post(NewsBackgroundApiUrls.subscribe, {}).pipe(map(resp => resp.response.newDate));
    }

    getSettings(): Observable<any> {
        return this.get(NewsBackgroundApiUrls.settings).pipe(map(resp => resp.response.settings));
    }

    setCurrencies(currencies: string[]): Observable<string[]> {
        return this.post(NewsBackgroundApiUrls.setCoins, {"coins": currencies}).pipe(map(resp => resp.response.coins.coins));
    }

    getResults(page?: number): Observable<NewsBackgroundResults[]> {
        return this.get(NewsBackgroundApiUrls.results + '?page=' + page).pipe(map(resp => {
            this.pagination = new Pagination(resp.response.result['totalPages'], resp.response.result['totalElements'],
                resp.response.result['size'], resp.response.result['number']);
            return resp.response.result.content;
        }));
    }

    getUpdatedResults(): Observable<NewsBackgroundResults[]>{
        return this.get(NewsBackgroundApiUrls.update).pipe(map(resp => {
            this.pagination = new Pagination(resp.response.latest['totalPages'], resp.response.latest['totalElements'],
                resp.response.latest['size'], resp.response.latest['number']);
            return resp.response.result.latest.content;
        }));
    }

}
