import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/observable/throw';
import {Constants} from '../../constants';
import {PreferencesService} from './preferences.service';

export abstract class RestService {

    protected baseUrl = '/api/';

    constructor(private _http: HttpClient, private _cookieService: CookieService) { }

    protected processLogin(token: any) {
        this._cookieService.set(Constants.TOKEN_NAME, token, new Date(new Date().getTime() + 24 * 60 * 60 * 1000), '/');
    }

    protected processLogout() {
        this._cookieService.deleteAll('/');
    }

    protected headers(contentType: string = 'application/json'): HttpHeaders {
        const token: string = this._cookieService.get(Constants.TOKEN_NAME);
        return new HttpHeaders().set('Content-Type', contentType).set(Constants.TOKEN_NAME, token);
    }

    // protected pureSyncGet(relativeUrl: string, queryParam?: HttpParams): Observable<any> {
    //     const xmlHttp = new XMLHttpRequest();
    //     xmlHttp.open( 'GET', this.baseUrl + relativeUrl, false ); // false for synchronous request
    //
    //     xmlHttp.setRequestHeader('Content-Type', 'application/json');
    //     xmlHttp.setRequestHeader(Constants.TOKEN_NAME, this._cookieService.get(Constants.TOKEN_NAME));
    //
    //     xmlHttp.send( null );
    //     return Observable.of(xmlHttp.response);
    // }

    protected get(relativeUrl: string, queryParam?: HttpParams, forceRefresh: boolean = false): Observable<any> {
        return this._http.get(this.baseUrl + relativeUrl + (forceRefresh ? '?_=' + new Date().getTime() : ''), { headers: this.headers(), params: queryParam});
    }

    protected getNoParams(relativeUrl: string, forceRefresh: boolean = false): Observable<any> {
        return this._http.get(this.baseUrl + relativeUrl + (forceRefresh ? '?_=' + new Date().getTime() : ''), { headers: this.headers()});
    }

    protected post(relativeUrl: string, data: any): Observable<any>  {
        return this._http.post(this.baseUrl + relativeUrl, data, {headers: this.headers()});
    }

    protected patch(relativeUrl: string, data: any): Observable<any>  {
        return this._http.patch(this.baseUrl + relativeUrl, data, {headers: this.headers()});
    }

    protected put(relativeUrl: string, data: any, contentType?: string): Observable<any>  {
        return this._http.put(this.baseUrl + relativeUrl, data, {headers: this.headers(contentType)});
    }

    protected delete(relativeUrl: string, queryParam?: HttpParams, contentType?: string): Observable<any>  {
        return this._http.delete(this.baseUrl + relativeUrl, {headers: this.headers(contentType), params: queryParam});
    }

    protected handleError(error: HttpErrorResponse): Observable<any> {
        return Observable.throw(error);
    }
}
