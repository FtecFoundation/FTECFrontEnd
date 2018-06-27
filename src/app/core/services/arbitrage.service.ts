import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {catchError} from 'rxjs/operators/catchError';
import {Observable} from 'rxjs/Observable';
import {ArbitrageWindowRequest, ArbitrageWindows, ArbitrageWindowsLog} from '../models/arbitrage-window';
import {map} from 'rxjs/operators/map';

enum ArbitrageApiUrls {
    getOldWindows = 'cabinet/getUserLog',
    getArbitrageWindows = 'cabinet/getWindows'
}

@Injectable()
export class ArbitrageService extends RestService {

    getOldWindows(): Observable<ArbitrageWindowsLog> {
        return this.get(ArbitrageApiUrls.getOldWindows).pipe(
            map(resp => resp.response),
            catchError(e => this.handleError(e)));
    }

    getArbitrageWindows(body: ArbitrageWindowRequest): Observable<ArbitrageWindows> {
        return this.post(ArbitrageApiUrls.getArbitrageWindows, body).pipe(
            map(resp => resp.response),
            catchError(e => this.handleError(e)));
    }

}
