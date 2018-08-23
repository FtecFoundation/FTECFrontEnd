import { Injectable } from '@angular/core';
import {RestService} from "../../../core/services/rest.service";
import {CookieService} from "ngx-cookie-service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {Order, OrderManagerResponse} from "../../../core/models/order-manager";

enum OrderManagerApiUrls {
    order = 'cabinet/orderManager/order'
}

@Injectable()
export class OrderManagerService extends RestService{

    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    addOrder(data: any): Observable<OrderManagerResponse> {
        return this.post(OrderManagerApiUrls.order, data).pipe(
            map(resp => resp.response));
    }

    deleteOrder(id: any): Observable<number> {
        const param = new HttpParams().set('id', id);
        return this.delete(OrderManagerApiUrls.order, param).pipe(
            map(resp => resp.response.available));
    }

    getActiveOrders(): Observable<Order[]> {
        return this.get(OrderManagerApiUrls.order).pipe(
            map(resp => resp.response.orders));
    }

}
