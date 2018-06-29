import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {map} from 'rxjs/operators/map';
import {catchError} from 'rxjs/operators/catchError';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators/tap';
import {HttpParams} from '@angular/common/http';

enum SocialApiUrls {
    dictionary = 'cabinet/social/dictionary',
    getTweets= 'cabinet/social/getTweets',
    renewSubscription = 'cabinet/social/subscribe',
    getExpirationDate = 'cabinet/social/getExpirationDate',
}

@Injectable()
export class SocialService extends RestService {

    getDictionary(): Observable<string[]> {
        return this.get(SocialApiUrls.dictionary).pipe(
            tap(resp => console.log(resp)),
            map(resp => resp.response.words),
            catchError(e => this.handleError(e)));


    }

    getExpirationDate(): Observable<Date> {
        return this.get(SocialApiUrls.getExpirationDate).pipe(
            tap(resp => console.log(resp)),
            map(resp => resp.response.expirationDate),
            catchError(e => this.handleError(e)));


    }

    getTweets(): Observable<string[]> {
        return this.get(SocialApiUrls.getTweets).pipe(
            map(resp => resp.response.tweets),
            catchError(e => this.handleError(e)));
    }

    deleteWord(word: any): Observable<any> {
        const param = new HttpParams().set('word', word);
        return this.delete(SocialApiUrls.dictionary, param).pipe(
            catchError(e => this.handleError(e)));
    }

    addWord(body: any): Observable<any> {
        return this.put(SocialApiUrls.dictionary, body).pipe(
            catchError(e => this.handleError(e)));
    }

    renewSubscription(): Observable<any> {
        return this.post(SocialApiUrls.renewSubscription, {}).pipe(
            catchError(e => this.handleError(e)));
    }

}
