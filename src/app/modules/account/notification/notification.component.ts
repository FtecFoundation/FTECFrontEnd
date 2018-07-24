import {Component, OnInit} from '@angular/core';
import {NotificationService} from './notification.service';
import {Router} from '@angular/router';
import {CurrentUserService} from '../../../core/services/current-user.service';
import {NotificationSetting} from '../../../core/models/user';

export const titles = {
    '1': 'Authorization',
    '2': 'Referral',
    '3': 'Social Assistant'
};

@Component({

  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: [ '../../../../assets/styles/common.scss', './notification.component.scss']
})
export class NotificationComponent implements OnInit {
    titles = titles;
    telegramNotifyAll = false;
    emailNotifyAll = false;

    emailNotifyItem = false;
    telegramNotifyItem = false;
    socialTelegram = false;
    authTelegram = false;

    constructor(private _notificationService: NotificationService, private router: Router,
                public _currentUserService: CurrentUserService) {
    }

    ngOnInit() {
    }

    // disableTelegram() {
    //   this._notificationService.getNotification().subscribe(data => {
    //     this.userTelegram = data;
    //     this.telegramNotifyItem = !this.telegramNotifyItem;
    //     this.telegramNotifyAll = !this.telegramNotifyAll;
    //   });
    // }


    setAuthNotification() {
        // this._notificationService.renewNotification(new NotificationSetting(notificationType))

        this.authTelegram = !this.authTelegram;
    }

    getNotificationTypes(notificationSettings: NotificationSetting): string[] {
        const ret = Object.keys(notificationSettings);
        ret.shift();
        return ret;
    }

    enableTelegram(type: any, method: string) {
        let notification = this._currentUserService.user.notificationSettings[type];
        notification.telegram = !notification[method];
        notification.notificationType = Number.parseInt(type);
        this._notificationService.renewNotification(notification).subscribe(() => {
            console.log(notification);
        });
    }

}



