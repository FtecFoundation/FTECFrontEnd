import { Component, OnInit } from '@angular/core';
import {TelegramAssistantService} from '../telegram-assistant.service';
import {ShowModalService} from '../../../not-active/show-modal.service';

@Component({
  selector: 'app-telegram-activated',
  templateUrl: './telegram-activated.component.html',
  styleUrls: ['../../insertions.scss', '../telegram-assistant.scss']
})
export class TelegramActivatedComponent implements OnInit {
  userId: string;
  userName: string;

  constructor(private _telegramService: TelegramAssistantService, public _showModalService: ShowModalService) { }

  ngOnInit() {
      this._telegramService.getTelegramData().subscribe(data => {
          this.userId = data.linkedChatId;
          this.userName = data.linkedUsername;
      });
  }

  showModal() {
    this._showModalService.showModal = true;
  }

}
