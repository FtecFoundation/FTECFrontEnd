import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export abstract class ExternalService {
    constructor(private _http: HttpClient) {
    }

    protected get(absoluteUrl: string, queryParam?: HttpParams): Observable<any> {
        return this._http.get(absoluteUrl, {params: queryParam});
    }
}
