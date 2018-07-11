import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {Observable} from 'rxjs/Observable';
import {Test, TestHistory} from '../models/test-cryptoacademy';
import {tap} from 'rxjs/operators/tap';
import {HttpParams} from '@angular/common/http';

enum CryptoacademyApiUrls {
    getTests = 'cabinet/cryptoacademy/getAllTests',
    getHistory = 'cabinet/cryptoacademy/getHistory',
    saveTest = 'cabinet/cryptoacademy/saveTest',
    resetTest = 'cabinet/cryptoacademy/resetTest'
}

@Injectable()
export class CryptoacademyService extends RestService {

    resetTest(testId: number): Observable<any> {
        const params = new HttpParams().set('test', '' + testId);
        return this.delete(CryptoacademyApiUrls.getTests, params).pipe(
            catchError(e => this.handleError(e)));
    }

    getTests(): Observable<Test[]> {
        return this.get(CryptoacademyApiUrls.getTests).pipe(
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
