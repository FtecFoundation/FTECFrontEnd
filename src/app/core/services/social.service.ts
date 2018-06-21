import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {ArbitrageWindowsLog} from '../models/arbitrage-window';
import {map} from 'rxjs/operators/map';
import {catchError} from 'rxjs/operators/catchError';
import {Observable} from 'rxjs/Observable';

enum SocialApiUrls {
    getDictionary = 'cabinet/social/getDictionary',
    addWord = 'cabinet/social/addWord',
    deleteWord = 'cabinet/social/deleteWord',
    renewSubscription = 'cabinet/subscribeForSocial'
}

@Injectable()
export class SocialService extends RestService {

    getDictionary(): Observable<string[]> {
        return this.get(SocialApiUrls.getDictionary).pipe(
            map(resp => resp.response.words),
            catchError(e => this.handleError(e)));
    }

    deleteWord(body: any): Observable<any> {
        return this.post(SocialApiUrls.deleteWord, body).pipe(
            catchError(e => this.handleError(e)));
    }

    addWord(body: any): Observable<any> {
        return this.post(SocialApiUrls.addWord, body).pipe(
            catchError(e => this.handleError(e)));
    }

    renewSubscription(): Observable<any> {
        return this.post(SocialApiUrls.renewSubscription, {}).pipe(
            catchError(e => this.handleError(e)));
    }

}