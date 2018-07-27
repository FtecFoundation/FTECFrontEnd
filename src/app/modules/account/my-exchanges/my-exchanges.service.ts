import {Injectable} from '@angular/core';
import {RestService} from '../../../core/services/rest.service';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Stock} from '../../insertions/arbitrage/available-exchanges';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {ErrorsService} from '../../../core/services/errors-handling/errors.service';
import {StatusCodeError} from '../../../core/models/exceptions';
import {catchError} from 'rxjs/operators/catchError';

@Injectable()
export class MyExchangesService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService, private _errorsService: ErrorsService) {
        super(_http, _cookieService);
    }

    public saveKey(privateKey: string, publicKey: string, exchange: Stock): Observable<any> {
        return this.post('/cabinet/apiKeys', {'publicKey': publicKey, 'privateKey': privateKey, 'stock': exchange.nameToSend})
            .pipe(
                map(value => value.response.response),
                catchError(err => {
                    this._errorsService.handleCustomException(new StatusCodeError(err.response.status));
                    return Observable.throw(err);
                })
            );
    }

    public getKeys() {
        return this.get('/cabinet/apiKeys').pipe(
            map(resp => console.log(resp))
        );
    }
}
