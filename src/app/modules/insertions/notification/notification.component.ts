import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../../core/services/image.service';
import {ShowModalService } from '../../not-active/show-modal.service';

export const titles = {
  "0" : "Smart Trading Modules",
  "1" : "Social Assistant",
  "2" : "Order Manager"
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['../insertions.scss', './notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notification: boolean = false;

  ngOnInit() {
  }

  disableAll() {
    this.notification = !this.notification;
  }




}
