import { Injectable } from '@angular/core';
import { RestService } from '../../../core/services/rest.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Stock } from '../../insertions/arbitrage/available-exchanges';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { ErrorsService } from '../../../core/services/errors-handling/errors.service';
import { StatusCodeError } from '../../../core/models/exceptions';
import { catchError } from 'rxjs/operators/catchError';
import { ExchangeKeys } from '../../../core/models/user';

@Injectable()
export class MyExchangesService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService, private _errorsService: ErrorsService) {
        super(_http, _cookieService);
    }

    public saveKey(privateKey: string, publicKey: string, exchange: Stock): Observable<any> {
        return this.post('/cabinet/apiKeys', { 'publicKey': publicKey, 'privateKey': privateKey, 'stock': exchange.nameToSend })
            .pipe(
                map(value => value.response.response),
                catchError(err => {
                    this._errorsService.handleCustomException(new StatusCodeError(err.response.status));
                    return Observable.throw(err);
                })
            );
    }

    deleteKey(exchange: ExchangeKeys): Observable<any> {
        const params = new HttpParams();

        params.append('stock', exchange.stock)

        return this.delete('/cabinet/apiKeys', params)
            .pipe(
                map(value => value.response.response),
                catchError(err => {
                    this._errorsService.handleCustomException(new StatusCodeError(err.response.status));
                    return Observable.throw(err);
                })
            );
    }

}
