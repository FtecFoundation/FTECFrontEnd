import { Component, OnInit } from '@angular/core';
import {TelegramAssistantService} from '../telegram-assistant.service';
import {ShowModalService} from '../../../not-active/show-modal.service';
import {Router} from '@angular/router';

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
  loggingNotification: boolean = false;
  refferalNotification: boolean = false;

  constructor(private _telegramService: TelegramAssistantService, public _showModalService: ShowModalService, private router: Router) { }

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
      this.router.navigate(['/modules/telegram-assistant']);
    });
  }

  loginNotification() {
    this._telegramService.changeLoginNotification().subscribe(data => {
      this.router.navigate(['/modules/telegram-assistant']);
      console.log(data);
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

    this.refferalNotification = !this.refferalNotification;
  }

}
