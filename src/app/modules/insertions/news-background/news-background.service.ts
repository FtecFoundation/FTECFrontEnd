import {Injectable} from '@angular/core';
import {RestService} from "../../../core/services/rest.service";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {NewsBackgroundResults} from "../../../core/models/news-background";

enum NewsBackgroundApiUrls {
    setCoins = 'cabinet/newsAnalyzer/setupCoins',
    subscribe = 'cabinet/newsAnalyzer/subscribe',
    settings = 'cabinet/newsAnalyzer/settings',
    results = 'cabinet/newsAnalyzer/results'
}

@Injectable()
export class NewsBackgroundService extends RestService {

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

    getResults(): Observable<NewsBackgroundResults[]> {
        return this.get(NewsBackgroundApiUrls.results).pipe(map(resp => resp.response.latest));
    }

}
