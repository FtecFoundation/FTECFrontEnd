import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {RestService} from "./rest.service";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {PaymentHistory} from "../../modules/account/payment/address-info";

enum PaymentApiUrls {
    address = 'cabinet/payment/address',
    changeCurrentCurrency = 'account/currentPaymentAsset',
    balance = 'cabinet/balances',
    refresh = 'cabinet/payment/refresh',
    history = 'cabinet/payment/getHistory'
}

@Injectable()
export class PaymentService extends RestService{

    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    getAddress(): Observable<any> {
      return this.get(PaymentApiUrls.address).pipe(map(resp => resp.response.addresses));
    }

    generateAddress(asset: string): Observable<any> {
        return this.post(PaymentApiUrls.address, {'paymentScope': asset}).pipe(map(resp => resp.response.address));
    }

    changeCurrentCurrency(currency: string): Observable<boolean> {
        return this.post(PaymentApiUrls.changeCurrentCurrency, {'paymentScope': currency})
            .pipe(map(resp => resp.response.changed));
    }

    getBalances(): Observable<any> {
        return this.get(PaymentApiUrls.balance).pipe(map(resp => resp.response.balances));
    }

    refreshPaymentStatus(paymentId: number): Observable<string> {
        const params = new HttpParams().set('paymentId', '' + paymentId);
        return this.get(PaymentApiUrls.refresh, params).pipe(map(resp => resp.response.status));
    }

    getPaymentHistory(): Observable<PaymentHistory[]> {
        return this.get(PaymentApiUrls.history).pipe(map(resp => resp.response.history));
    }

}
