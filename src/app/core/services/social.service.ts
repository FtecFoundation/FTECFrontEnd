import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {map} from 'rxjs/operators/map';
import {catchError} from 'rxjs/operators/catchError';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators/tap';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

enum SocialApiUrls {
    dictionary = 'cabinet/social/dictionary',
    getTweets= 'cabinet/social/getTweets',
    renewSubscription = 'cabinet/social/subscribe',
    getExpirationDate = 'cabinet/social/getExpirationDate',
    deleteAllWords = 'cabinet/social/deleteWholeDictionary'
}

@Injectable()
export class SocialService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService){
        super(_http, _cookieService);
    }
    getDictionary(): Observable<string[]> {
        return this.get(SocialApiUrls.dictionary).pipe(
            map(resp => resp.response.words),
            catchError(e => this.handleError(e)));


    }

    getExpirationDate(): Observable<Date> {
        return this.get(SocialApiUrls.getExpirationDate).pipe(
            map(resp => resp.response.expirationDate),
            catchError(e => this.handleError(e)));
    }

    deleteAllWords(): Observable<number> {
        return this.delete(SocialApiUrls.deleteAllWords).pipe(
            map(resp => resp.response.available),
            catchError(e => this.handleError(e)));
    }

    getTweets(): Observable<string[]> {
        return this.get(SocialApiUrls.getTweets).pipe(
            map(resp => resp.response.tweets),
            catchError(e => this.handleError(e)));
    }

    deleteWord(word: any): Observable<number> {
        const param = new HttpParams().set('word', word);
        return this.delete(SocialApiUrls.dictionary, param).pipe(
            map(resp => resp.response.available),
            catchError(e => this.handleError(e)));
    }

    addWord(body: any): Observable<number> {
        return this.put(SocialApiUrls.dictionary, body).pipe(
            map(resp => resp.response.available),
            catchError(e => this.handleError(e)));
    }

    renewSubscription(): Observable<any> {
        return this.post(SocialApiUrls.renewSubscription, {}).pipe(
            catchError(e => this.handleError(e)));
    }

}
