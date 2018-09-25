import { Injectable } from '@angular/core';
import {RestService} from "../../../core/services/rest.service";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {GlobalPriceRequest, GlobalPriceResult} from "../../../core/models/global-price";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

enum GlobalPriceApiUrls {
  searchPrices = 'cabinet/priceAnalyzer/'
}

@Injectable()
export class GlobalPriceAnalyzerService extends RestService{

    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    searchPrices(data: GlobalPriceRequest): Observable<any> {
      return this.post(GlobalPriceApiUrls.searchPrices, data).pipe(map(resp => resp.response.result));
    }

}
