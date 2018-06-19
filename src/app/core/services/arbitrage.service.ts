import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {catchError} from 'rxjs/operators/catchError';
import {tap} from 'rxjs/operators/tap';
import {Observable} from 'rxjs/Observable';

enum ArbitrageApiUrls {
    getOldWindows = 'cabinet/getUserLog'
}

@Injectable()
export class ArbitrageService extends RestService {

    getOldWindows(): Observable<any> {
        return this.get(ArbitrageApiUrls.getOldWindows).pipe(
            tap(resp => console.log(resp)),
            catchError(e => this.handleError(e)));
    }

}
