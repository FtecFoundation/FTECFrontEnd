import { Injectable } from '@angular/core';
import {RestService} from "./rest.service";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

enum InfoApiUrls {
  prices = 'commissions'
}

@Injectable()
export class InfoService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    getPrices(): Observable<any> {
      return this.get(InfoApiUrls.prices).pipe(map(resp => resp.response));
    }

}
