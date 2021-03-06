import { Injectable } from '@angular/core';
import {RestService} from "../../../core/services/rest.service";
import {CookieService} from "ngx-cookie-service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {
    PriceNotification,
    PriceNotificationResponse,
    PriceNotificationsData
} from "../../../core/models/price-notification";

enum PriceNotificationApiUrls {
    notification = 'cabinet/priceNotification/notification'
}

@Injectable()
export class PriceNotificationService extends RestService{

    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    addNotification(data: any): Observable<PriceNotificationResponse> {
        return this.post(PriceNotificationApiUrls.notification, data).pipe(
            map(resp => resp.response));
    }

    deleteNotification(id: any): Observable<number> {
        const param = new HttpParams().set('id', id);
        return this.delete(PriceNotificationApiUrls.notification, param).pipe(
            map(resp => resp.response.available));
    }

    getActiveNotifications(): Observable<PriceNotification[]> {
        return this.get(PriceNotificationApiUrls.notification).pipe(
            map(resp => resp.response.notifications));
    }

}
