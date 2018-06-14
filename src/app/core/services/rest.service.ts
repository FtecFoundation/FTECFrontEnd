import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/observable/throw';

@Injectable()
export abstract class RestService {

    protected baseUrl = '/api/';

    constructor(private _http: HttpClient, private _cookieService: CookieService) { }

    protected processLogin(token: any) {
        this._cookieService.delete('token');
        this._cookieService.set('token', token);
    }

    protected processLogout() {
        this._cookieService.delete('token');
    }

    protected get headers(): HttpHeaders {
        const token: string = this._cookieService.get('token');
        return new HttpHeaders().set('Content-Type', 'application/json').set('TOKEN-X-AUTH', token);
    }

    protected get(relativeUrl: string, queryParam?: HttpParams): Observable<any> {
        return this._http.get(this.baseUrl + relativeUrl, {headers: this.headers, params: queryParam});
    }

    protected post(relativeUrl: string, data: any): Observable<any>  {
        return this._http.post(this.baseUrl + relativeUrl, data, {headers: this.headers});
    }

    protected handleError(error: HttpErrorResponse): Observable<any> {
        return Observable.throw(error);
    }
}
