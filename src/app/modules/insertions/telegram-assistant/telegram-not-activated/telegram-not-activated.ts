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
    botDomain = '';
    showAccessCode: boolean;

    constructor(private _telegramService: TelegramAssistantService,
                public _preferencesService: PreferencesService,
                public _currentUserService: CurrentUserService,
                private router: Router) {
    }

    ngOnInit() {
        if (!this._currentUserService.tgSettings) {
            this._currentUserService.getTelegramSettingsObs(true).subscribe();
        }
    }

    enable() {
        this.showAccessCode = true;
    }

    checkIfConnected() {
        this._telegramService.isConnected().subscribe(connected => {
            if(connected) this.router.navigateByUrl('/modules/telegram-assistant/settings');
        });
    }
}
