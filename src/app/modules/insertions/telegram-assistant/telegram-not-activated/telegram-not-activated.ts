import {Component, Input, OnInit} from '@angular/core';
import {TelegramAssistantService} from '../telegram-assistant.service';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {settings} from 'cluster';
import {Router} from '@angular/router';

@Component({
    selector: 'app-social',
    templateUrl: './telegram-not-activated.component.html',
    styleUrls: ['../../insertions.scss', '../telegram-assistant.scss']
})
export class TelegramNotActivatedComponent implements OnInit {
    qrUrl = 'tg://resolve?domain=';
    botDomain = '';
    showAccessCode: boolean;

    constructor(private _telegramService: TelegramAssistantService,
                public _currentUserService: CurrentUserService,
                private router: Router) {
    }

    ngOnInit() {
        this._telegramService.getBotDomain().subscribe(data => {
            this.qrUrl += data;
            this.botDomain = data;
        });
    }

    enable() {
        if (!this._currentUserService.tgSettings.accessCode) {
            this._currentUserService.getTelegramSettingsObs(true);
        }
        this.showAccessCode = true;
    }

    checkIfConnected() {
        this._currentUserService.getTelegramSettingsObs(true).subscribe(
            data => {
                console.log(data);
                if (data.linkedChatId) { this.router.navigateByUrl('/modules/telegram-assistant/settings'); }
            }
        );
    }
}
