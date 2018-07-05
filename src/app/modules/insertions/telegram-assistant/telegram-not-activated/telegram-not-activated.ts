import {Component, Input, OnInit} from '@angular/core';
import {TelegramAssistantService} from '../telegram-assistant.service';

@Component({
    selector: 'app-social',
    templateUrl: './telegram-not-activated.component.html',
    styleUrls: ['../../insertions.scss', '../telegram-assistant.scss']
})
export class TelegramNotActivatedComponent implements OnInit {
    qrUrl = 'tg://resolve?domain=';
    botDomain: string = '';
    accessCode: string;

    constructor(private _telegramService: TelegramAssistantService) {
    }

    ngOnInit() {
        this._telegramService.getBotDomain().subscribe(data => {
            this.qrUrl += data;
            this.botDomain = data;
        });
    }

    enable() {
        this._telegramService.getHash().subscribe(data => {
            this.accessCode = data;
        });
    }
}
