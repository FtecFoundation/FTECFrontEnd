import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {tap} from 'rxjs/operators/tap';
import {catchError} from 'rxjs/operators/catchError';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CaptchaService extends RestService {

    submitCaptcha(data: any): Observable<any> {
        return this.post('submitRecatpcha', data).pipe(
            catchError(e => this.handleError(e)));
    }


}
