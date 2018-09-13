import {Component, Input, OnInit} from '@angular/core';
import {TelegramAssistantService} from '../telegram-assistant.service';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {Router} from '@angular/router';
import {PreferencesService} from "../../../../core/services/preferences.service";

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
                private _preferencesService: PreferencesService,
                public _currentUserService: CurrentUserService,
                private router: Router) {
    }

    ngOnInit() {
        this.botDomain = this._preferencesService.preferences.botDomain;
        this.qrUrl += this.botDomain;
    }

    enable() {
        if (!this._currentUserService.tgSettings) {
            this._currentUserService.getTelegramSettingsObs(true).subscribe(() => {
                this.showAccessCode = true;
            });
        return;
        }
        this.showAccessCode = true;

    }

    checkIfConnected() {
        this._currentUserService.getTelegramSettingsObs(true).subscribe(data => {
            if (data.chatId) { this.router.navigateByUrl('/modules/telegram-assistant/settings'); }
        });
    }
}
