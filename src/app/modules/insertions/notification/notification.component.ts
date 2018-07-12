import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../../core/services/image.service';
import {ShowModalService } from '../../not-active/show-modal.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['../insertions.scss', './notification.component.scss']
})
export class NotificationComponent implements OnInit {

  ngOnInit() {
  }


}
