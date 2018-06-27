import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {ArbitrageWindowsLog} from '../models/arbitrage-window';
import {Observable} from 'rxjs/Observable';

enum CryptoacademyApiUrls {
    processUsersAnswer= 'cabinet/cryptoacademy/saveTest',
}

@Injectable()
export class CryptoacademyService extends RestService {

    processUsersAnswer(): Observable<any> {
        return this.get(CryptoacademyApiUrls.processUsersAnswer).pipe(
            map(resp => resp.response),
            catchError(e => this.handleError(e)));
    }
}
