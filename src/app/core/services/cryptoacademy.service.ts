import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {Observable} from 'rxjs/Observable';
import {Test} from '../models/test-cryptoacademy';

enum CryptoacademyApiUrls {
    processUsersAnswer = 'cabinet/cryptoacademy/saveTest',
    getTests = 'cabinet/cryptoacademy/getAllTests',
    getHistory = 'cabinet/cryptoacademy/getHistory'
}

@Injectable()
export class CryptoacademyService extends RestService {

    processUsersAnswer(): Observable<any> {
        return this.get(CryptoacademyApiUrls.processUsersAnswer).pipe(
            map(resp => resp.response),
            catchError(e => this.handleError(e)));
    }

    getTests(): Observable<Test[]> {
        return this.get(CryptoacademyApiUrls.getTests).pipe(
            catchError(e => this.handleError(e)));
    }

    getTestsHistory(): Observable<Test[]> {
        return this.get(CryptoacademyApiUrls.getHistory).pipe(
            catchError(e => this.handleError(e)));
    }
}
