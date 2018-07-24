import { Component, OnInit } from '@angular/core';
import {TelegramAssistantService} from '../telegram-assistant.service';
import {ShowModalService} from '../../../not-active/show-modal.service';
import {Router} from '@angular/router';
import {CurrentUserService} from '../../../../core/services/current-user.service';

@Component({
  selector: 'app-telegram-activated',
  templateUrl: './telegram-activated.component.html',
  styleUrls: ['../../insertions.scss', '../telegram-assistant.scss']
})
export class TelegramActivatedComponent implements OnInit {
  userId: string;
  userName: string;
  botDomain = '';
  userNotification = '';
  loggingNotification = false;
  referralNotification = false;

  constructor(private _telegramService: TelegramAssistantService, public _showModalService: ShowModalService, private router: Router,
              private currentUserService: CurrentUserService) { }

  ngOnInit() {
      this._telegramService.getBotDomain().subscribe(data => {
          this.botDomain = data;
      });

      this._telegramService.getTelegramData().subscribe(data => {
          this.userId = data.linkedChatId;
          this.userName = data.linkedUsername;
      });
  }

  showModal() {
    this._showModalService.showModal = true;
  }

  unlink() {
    this._telegramService.unlinkAccount().subscribe(data => {
      this.currentUserService.tgSettings.linkedChatId = '';
      this.currentUserService.tgSettings.linkedUsername = '';
      this.router.navigateByUrl('/modules/telegram-assistant');
    });
  }

  loginNotification() {
    this._telegramService.changeLoginNotification().subscribe(data => {
      this.router.navigate(['/modules/telegram-assistant']);
      this.userNotification = data;
    });

    // this.loggingNotification = !this.loggingNotification;
  }

  refferalChangeNotification() {
    // this._telegramService.changeLoginNotification().subscribe(data => {
    //   this.router.navigate(['/modules/telegram-assistant']);
    //   console.log(data);
    //   this.userNotification = data;
    // });

    this.referralNotification = !this.referralNotification;
  }

}
