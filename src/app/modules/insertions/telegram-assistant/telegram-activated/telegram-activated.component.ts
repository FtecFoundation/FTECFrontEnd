import { Component, OnInit } from '@angular/core';
import {TelegramAssistantService} from '../telegram-assistant.service';
import {ShowModalService} from '../../../not-active/show-modal.service';
import {Router} from '@angular/router';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {notificationMapper} from '../../../../constants';
import {NotificationService} from '../../../account/notification/notification.service';
import {NotificationSetting} from '../../../../core/models/user';

@Component({
  selector: 'app-telegram-activated',
  templateUrl: './telegram-activated.component.html',
  styleUrls: ['../../insertions.scss', '../telegram-assistant.scss']
})
export class TelegramActivatedComponent implements OnInit {
  botDomain = '';
  notificationMapper = notificationMapper;

  constructor(private _telegramService: TelegramAssistantService, public _showModalService: ShowModalService, private router: Router,
              public currentUserService: CurrentUserService, private notificationService: NotificationService) { }

  ngOnInit() {
      this._telegramService.getBotDomain().subscribe(data => {
          this.botDomain = data;
      });
      console.log(this.currentUserService.notificationSettings);
      // In order to make sure html will use telegram settings but null with getter
      this.currentUserService.getTelegramSettingsObs(false);
  }

  showModal() {
    this._showModalService.showModal = true;
  }

  unlink() {
    this._telegramService.unlinkAccount().subscribe(() => {
      this.currentUserService.tgSettings.linkedChatId = '';
      this.currentUserService.tgSettings.linkedUsername = '';
      this.router.navigateByUrl('/modules/telegram-assistant');
    });
  }

  get notifications(): string[] {
    const keys = Object.keys(this.currentUserService.notificationSettings);
    keys.shift();
    return keys;
  }

  changeNotification(notificationType: number) {
    const currentSettings = this.currentUserService.notificationSettings[notificationType];
    currentSettings.telegram = !currentSettings.telegram;
    this.notificationService.renewNotification(NotificationSetting.from(notificationType, currentSettings));
  }

}
