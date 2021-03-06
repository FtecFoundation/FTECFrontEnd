import { Injectable } from '@angular/core';
import {RestService} from '../../../core/services/rest.service';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {Observable} from 'rxjs/Observable';
import {Question, QuestionsContainer, Test, TestHistory} from '../../../core/models/test-cryptoacademy';
import {tap} from 'rxjs/operators/tap';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

enum CryptoacademyApiUrls {
    getTests = 'crypto/main.json',
    getQuestions = 'crypto/questions/',
    getHistory = 'cabinet/cryptoacademy/getHistory',
    saveTest = 'cabinet/cryptoacademy/saveTest',
    resetTest = 'cabinet/cryptoacademy/resetTest'
}

@Injectable()
export class CryptoacademyService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }
    resetTest(testId: number): Observable<any> {
        const params = new HttpParams().set('test', '' + testId);
        return this.delete(CryptoacademyApiUrls.resetTest, params).pipe(
            catchError(e => this.handleError(e)));
    }

    getTests(): Observable<Test[]> {
        return this.get(CryptoacademyApiUrls.getTests).pipe(
            catchError(e => this.handleError(e)));
    }

    getQuestions(test: number): Observable<QuestionsContainer> {
        return this.get(CryptoacademyApiUrls.getQuestions + test + '.json').pipe(
            catchError(e => this.handleError(e)));
    }

    answer(data: any): Observable<any> {
        return this.post(CryptoacademyApiUrls.saveTest, data).pipe(
            map(resp => resp.response),
            catchError(e => this.handleError(e)));
    }

    getTestsHistory(): Observable<TestHistory> {
        return this.get(CryptoacademyApiUrls.getHistory).pipe(
            map(resp => resp.response),
            catchError(e => this.handleError(e)));
    }
}
