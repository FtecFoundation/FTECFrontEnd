import {Component, OnInit} from '@angular/core';
import {NotificationService} from './notification.service';
import {Router} from '@angular/router';
import {CurrentUserService} from '../../../core/services/current-user.service';
import {NotificationSetting, NotificationSettings} from '../../../core/models/user';
import {notificationMapper} from '../../../constants';
import {ShowModalService} from "../../not-active/show-modal.service";


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: [ '../../../../assets/styles/common.scss', './notification.component.scss']
})
export class NotificationComponent implements OnInit {
    titles = notificationMapper;

    constructor(private _notificationService: NotificationService,
                public _currentUserService: CurrentUserService,
                public showModalService: ShowModalService) {
    }

    ngOnInit() {
    }

    changeMode(method: string) {
        this._currentUserService.user.notificationSettings[0][method] = !this._currentUserService.user.notificationSettings[0][method];
        this._notificationService.updateMode(this._currentUserService.user.notificationSettings[0]).subscribe(() => {
        });
    }

    getNotificationTypes(notificationSettings: NotificationSettings): string[] {
        const ret = Object.keys(notificationSettings);
        ret.shift();
        return ret;
    }

    changeNotificationStatus(type: string, method: string) {
        const notification = this._currentUserService.user.notificationSettings[type];
        notification[method] = !notification[method];
        notification.notificationType = Number.parseInt(type);
        this._notificationService.updateNotification(notification).subscribe(() => {
            console.log(this._currentUserService.user.notificationSettings[type]);
            this._currentUserService.user.notificationSettings[type] = notification;
        });
    }


}



