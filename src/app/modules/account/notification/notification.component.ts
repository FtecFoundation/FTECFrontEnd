import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationService} from './notification.service';
import {NotificationSetting} from '../../../core/models/user';
import {CurrentUserService} from '../../../core/services/current-user.service';

export const titles = {
  '0' : 'Smart Trading Modules',
  '1' : 'Social Assistant',
  '2' : 'Order Manager'
};

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['../../../../assets/styles/common.scss', './notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notification: NotificationSetting;

  telegramNotifyAll = false;
  emailNotifyAll = false;

  emailNotifyItem = false;
  telegramNotifyItem = false;

  socialTelegram = false;
  authTelegram = false;

  userTelegram = '';
  userEmail = '';
  authNotification = '';

  constructor(private _notificationService: NotificationService, private router: Router, private _currentUser: CurrentUserService) { }


  ngOnInit() {
    // this.notification = this._currentUser.currentUser.notificationSettings;
  }

  // disableTelegram() {
  //   this._notificationService.getNotification().subscribe(data => {
  //     this.userTelegram = data;
  //     this.telegramNotifyItem = !this.telegramNotifyItem;
  //     this.telegramNotifyAll = !this.telegramNotifyAll;
  //   });
  // }


  setAuthNotification() {
    this._notificationService.renewNotification();

    this.authTelegram = !this.authTelegram;
  }

}



