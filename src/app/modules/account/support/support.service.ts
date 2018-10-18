import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {RestService} from "../../../core/services/rest.service";
import {Observable} from "rxjs";

enum SupportApiUrls {
    simpleSupport = 'sendSimpleSupportRequest'
}

@Injectable()
export class SupportService extends RestService {

    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    sendSimpleRequest(data: any): Observable<any> {
        return this.post(SupportApiUrls.simpleSupport, data);
    }

}
