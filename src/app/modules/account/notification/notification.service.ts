import { Injectable } from '@angular/core';
import { RestService } from '../../../core/services/rest.service';
import { catchError } from 'rxjs/operators/catchError';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { NotificationSetting } from '../../../core/models/user';

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
    getNotification(): Observable<any> {
        return this.get(TelegramUrls.getNotificationSettings).pipe(
            map(resp => resp.response.settings));
    }

    renewNotification(data: NotificationSetting): Observable<any> {
        return this.put(TelegramUrls.changeNotificationSetting, data);
    }

}
