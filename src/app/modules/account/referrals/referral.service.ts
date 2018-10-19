import { Injectable } from '@angular/core';
import {RestService} from "../../../core/services/rest.service";
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {ReferralData} from "../../../core/models/referrals";

enum ReferralsApiUrls {
    getTests = 'cabinet/getReferrals'
}

@Injectable()
export class ReferralService extends RestService{

    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    getReferrals(): Observable<ReferralData> {
      return this.get(ReferralsApiUrls.getTests).pipe(map(resp => resp.response));
    }

}
