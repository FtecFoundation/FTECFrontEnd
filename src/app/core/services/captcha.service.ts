import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {tap} from 'rxjs/operators/tap';
import {catchError} from 'rxjs/operators/catchError';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class CaptchaService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService){
        super(_http, _cookieService);
    }
    submitCaptcha(data: any): Observable<any> {
        return this.post('submitRecatpcha', data).pipe(
            catchError(e => this.handleError(e)));
    }


}
