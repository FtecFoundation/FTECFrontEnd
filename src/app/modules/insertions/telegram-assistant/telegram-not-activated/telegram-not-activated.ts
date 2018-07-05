import {Component, Input, OnInit} from '@angular/core';
import {TelegramAssistantService} from '../telegram-assistant.service';

@Component({
    selector: 'app-social',
    templateUrl: './telegram-not-activated.component.html',
    styleUrls: ['../../insertions.scss', '../telegram-assistant.scss']
})
export class TelegramNotActivatedComponent implements OnInit {
    qrUrl = 'tg://resolve?domain=FTEC_Telegram_bot';
    accessCode: string;

    constructor(private _telegramService: TelegramAssistantService) {
    }

    ngOnInit() {
    }

    enable() {
        this._telegramService.getHash().subscribe(data => {
            this.accessCode = data;
        });
    }
}
