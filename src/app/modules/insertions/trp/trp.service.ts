import {Injectable} from '@angular/core';
import {RestService} from "../../../core/services/rest.service";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {CreateRecommendationData, TradingRecommendation} from "./trp";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

const TrpApiUrls = {
    create: 'cabinet/tradeRecommendation/forecasts/create',
    myRecommendations: 'cabinet/tradeRecommendation/forecasts/owner'
};

@Injectable()
export class TrpService extends RestService {

    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    createRecommendation(data: CreateRecommendationData): Observable<any> {
        return this.post(TrpApiUrls.create, data).pipe(map(resp => resp.response));
    }

    getMyRecommendations(): Observable<TradingRecommendation[]> {
        return this.get(TrpApiUrls.myRecommendations).pipe(map(resp => resp.response));
    }

}
