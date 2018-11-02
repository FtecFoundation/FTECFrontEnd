import { Injectable } from '@angular/core';
import {RestService} from "../../core/services/rest.service";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

@Injectable()
export class FaqRestService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    getFaqs(): Observable<any> {
      return this.get('faq').pipe(tap(resp => console.log(resp)));
    }

}
