import {Injectable} from '@angular/core';
import {RestService} from '../../../core/services/rest.service';
import {catchError} from 'rxjs/operators/catchError';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

const TelegramUrls = {
    getTelegramData: 'modules/telegram/getTelegramData',
    getHash: 'modules/telegram/getHash',
    getBotDomain: 'getBotDomain',
    unlink: 'modules/telegram/unlink',
    getNotificationSettings: 'cabinet/notifications/getNotificationSettings'
};

@Injectable()
export class TelegramAssistantService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }
    // getTelegramData(): Observable<any> {
    //     return this.get(TelegramUrls.getTelegramData).pipe(
    //         map(resp => resp.response.telegram_data),
    //         catchError(e => this.handleError(e)));
    // }

    // This is deprecated and not needed
    // getHash(): Observable<string> {
    //     return this.get(TelegramUrls.getHash).pipe(
    //         map(resp => resp.response.hash),
    //         catchError(e => this.handleError(e)));
    // }

    getBotDomain(): Observable<string> {
        return this.get(TelegramUrls.getBotDomain).pipe(
            map(resp => resp.botDomain),
            catchError(e => this.handleError(e)));
    }

    // ДЕЛАЙ ОТЭТА

    unlinkAccount(): Observable<any> {
        return this.post(TelegramUrls.unlink, {}).pipe(
            catchError(e => this.handleError(e)));
    }

    changeLoginNotification(): Observable<any> {
        return this.get(TelegramUrls.getNotificationSettings).pipe(
            map(resp => resp.response.settings),
            catchError(e => this.handleError(e)));
    }

    isConnected(): Observable<any>{
        return this.get('/modules/telegram/isConnected', null, true).pipe(map(response=> response.response));
    }

}
