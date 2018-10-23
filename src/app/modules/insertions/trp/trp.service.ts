import {Injectable} from '@angular/core';
import {RestService} from "../../../core/services/rest.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {AuthorRating, CreateRecommendationData, TradingRecommendation, TrpComment, TrpFilter} from "./trp";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

const TrpApiUrls = {
    create: 'cabinet/tradeRecommendation/forecasts/create',
    myRecommendations: 'cabinet/tradeRecommendation/forecasts/owner',
    authorRating: 'cabinet/tradeRecommendation/forecasts/authorRating',
    recommendations: 'cabinet/tradeRecommendation/forecasts/',
    comments: '/comment/',
    subscribe: 'cabinet/tradeRecommendation/forecasts/subscribe'
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

    getAllRecommendations(filter?: TrpFilter): Observable<TradingRecommendation[]> {
        let params = new HttpParams();
        if (filter) {
            if (filter.startDate) params = params.set('startDate', '' + filter.startDate.getTime());
            if (filter.overdue) params = params.set('overdue', '' + filter.overdue);
            if (filter.minLikes) params = params.set('minLikes', '' + filter.minLikes);
            if (filter.pair) params = params.set('pair', filter.pair);
            if (filter.price) params = params.set('price', filter.price);
            if (filter.stock) params = params.set('stock', filter.stock);
        }

        return this.get(TrpApiUrls.recommendations, params).pipe(map(resp => resp.response));
    }

    getAuthorRating(id: number): Observable<AuthorRating> {
        const param = new HttpParams().set('authorId', '' + id);
        return this.get(TrpApiUrls.authorRating, param).pipe(map(resp => resp.response));
    }

    getComments(forecastId: number): Observable<TrpComment[]> {
        return this.get(TrpApiUrls.recommendations + forecastId + TrpApiUrls.comments).pipe(map(resp => resp.response.comments));
    }

    postComment(forecastId: number, message: any): Observable<TrpComment> {
        return this.post(TrpApiUrls.recommendations + forecastId + TrpApiUrls.comments,
            message).pipe(map(resp => resp.response));
    }

    subscribe(forecastId: number): Observable<any> {
        return this.post(TrpApiUrls.subscribe + '?forecastId=' + forecastId, {}).pipe(map(resp => resp.response));
    }

}
