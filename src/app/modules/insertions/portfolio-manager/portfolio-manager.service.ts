import { Injectable } from '@angular/core';
import {RestService} from "../../../core/services/rest.service";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {Portfolio, PortfolioPreferences} from "./portfolio";
import {map} from "rxjs/operators";

const PortfolioManagerApiUrls = {
  generate: 'cabinet/portfolio/capitalization',
    getOld: 'cabinet/portfolio/previousCapitalization'
};

@Injectable()
export class PortfolioManagerService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    generatePortfolio(data: PortfolioPreferences): Observable<any> {
      return this.post(PortfolioManagerApiUrls.generate, data).pipe(map(resp => resp.response));
    }

    getOldPortfolios(){
        return this.get(PortfolioManagerApiUrls.getOld).pipe(map(resp => resp.response))
    }
}
