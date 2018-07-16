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

  telegramNotify = false;
  userTelegram = '';

  constructor(private _notificationService: NotificationService, private router: Router) { }


  ngOnInit() {
  }

  disableTelegram() {
    this._notificationService.changeTelegramNotification().subscribe(data => {
      console.log(data);
      this.userTelegram = data;
    
      this.telegramNotify = !this.telegramNotify;
    
    });

  }

}