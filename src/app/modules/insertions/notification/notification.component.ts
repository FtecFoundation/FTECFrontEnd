import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../../core/services/image.service';
import {ShowModalService } from '../../not-active/show-modal.service';
import {Router} from '@angular/router';
import {NotificationService} from './notification.service';


export const titles = {
  '0' : 'Smart Trading Modules',
  '1' : 'Social Assistant',
  '2' : 'Order Manager'
};

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['../insertions.scss', './notification.component.scss']
})
export class NotificationComponent implements OnInit {

  telegramNotifyAll = false;
  emailNotifyAll = false;

  emailNotifyItem = false;
  telegramNotifyItem = false;
  
  socialTelegram = false;
  authTelegram = false;

  userTelegram = '';
  userEmail = '';
  authNotification = '';

  constructor(private _notificationService: NotificationService, private router: Router) { }


  ngOnInit() {
  }

  // disableTelegram() {
  //   this._notificationService.getNotification().subscribe(data => {
  //     this.userTelegram = data;
  //     this.telegramNotifyItem = !this.telegramNotifyItem;
  //     this.telegramNotifyAll = !this.telegramNotifyAll;
  //   });

  //   this._notificationService.renewNotification();
  // }


  setAuthNotification() {
    // this._notificationService.renewNotification(new NotificationSetting(notificationType))
    
      this.authTelegram = !this.authTelegram;
  }


  // disableEmail() {
  //   this._notificationService.changeNotification().subscribe(data => {
  //     this.userEmail = data;
    
  //     this.emailNotifyItem = !this.emailNotifyItem;

  //     this.emailNotifyAll = !this.emailNotifyAll;
  //   });
  // }

  // changeAuthorisationTelegram() {
  //   this._notificationService.renewNotification().subscribe(data => {
      
  //     this.userTelegram = data;
    
  //     this.telegramNotifyItem = !this.telegramNotifyItem;

  //     this.telegramNotifyAll = !this.telegramNotifyAll;
  //   });
  // }

}