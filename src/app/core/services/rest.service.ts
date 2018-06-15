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
        let sdate = new Date();
        this._cookieService.set('token', token, sdate.setDate(sdate.getDate() + 1), '/');
    }

    protected processLogout() {
        this._cookieService.deleteAll('/');
    }

    protected get headers(): HttpHeaders {
        const token: string = this._cookieService.get('token');
        return new HttpHeaders().set('Content-Type', 'application/json').set('TOKEN-X-AUTH', token);
    }

    protected get(relativeUrl: string, queryParam?: HttpParams): Observable<any> {
        return this._http.get(this.baseUrl + relativeUrl, {headers: this.headers, params: queryParam});
    }

    protected getBlob(relativeUrl: string, queryParam?: HttpParams): Observable<Blob> {
        return this._http.get(this.baseUrl + relativeUrl, {headers: this.headers, params: queryParam, responseType: 'blob'});
    }

    protected post(relativeUrl: string, data: any): Observable<any>  {
        return this._http.post(this.baseUrl + relativeUrl, data, {headers: this.headers});
    }

    protected handleError(error: HttpErrorResponse): Observable<any> {
        return Observable.throw(error);
    }
}
