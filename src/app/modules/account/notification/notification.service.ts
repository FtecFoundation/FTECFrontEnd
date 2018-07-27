import { Injectable } from '@angular/core';
import { RestService } from '../../../core/services/rest.service';
import { catchError } from 'rxjs/operators/catchError';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { NotificationSetting } from '../../../core/models/user';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

const TelegramUrls = {
    getTelegramData: 'modules/telegram/getTelegramData',
    getHash: 'modules/telegram/getHash',
    getBotDomain: 'getBotDomain',
    unlink: 'modules/telegram/unlink',
    getNotificationSettings: 'cabinet/notifications/getNotificationSettings',
    changeModeSetting: '/cabinet/notifications/changeModeSetting',
    changeNotificationSetting: 'cabinet/notifications/changeNotificationSetting'
};

@Injectable()
export class NotificationService extends RestService {
    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }
    getNotification(): Observable<any> {
        return this.get(TelegramUrls.getNotificationSettings).pipe(
            map(resp => resp.response.settings));
    }

    renewNotification(data: NotificationSetting): Observable<any> {
        console.log(data);
        return this.put(TelegramUrls.changeNotificationSetting, data);
    }

}
