import { Component, OnInit } from '@angular/core';
import {TelegramAssistantService} from '../telegram-assistant.service';
import {ShowModalService} from '../../../not-active/show-modal.service';
import {Router} from '@angular/router';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {notificationMapper} from '../../../../constants';
import {NotificationService} from '../../../account/notification/notification.service';
import {NotificationSetting} from '../../../../core/models/user';
import {PreferencesService} from "../../../../core/services/preferences.service";

@Component({
  selector: 'app-telegram-activated',
  templateUrl: './telegram-activated.component.html',
  styleUrls: ['../../insertions.scss', '../telegram-assistant.scss']
})
export class TelegramActivatedComponent implements OnInit {
  botDomain = '';
  notificationMapper = notificationMapper;

  constructor(private _telegramService: TelegramAssistantService, public _showModalService: ShowModalService, private router: Router,
              public currentUserService: CurrentUserService, private notificationService: NotificationService,
              private _preferencesService: PreferencesService) { }

  ngOnInit() {
      this.botDomain = this._preferencesService.preferences.botDomain;
      this.currentUserService.getTelegramSettingsObs(false);
  }

  showModal() {
    this._showModalService.showModal = true;
  }

  unlink() {
    this._telegramService.unlinkAccount().subscribe(() => {
      this.currentUserService.tgSettings.chatId = '';
      this.currentUserService.tgSettings.username = '';
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
    this.notificationService.updateNotification(NotificationSetting.from(notificationType, currentSettings))
        .subscribe();
  }

}
