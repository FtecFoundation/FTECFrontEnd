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
    howTo: string[] = ['The user creates or logs into the telegram account using an official desktop or mobile application.',
    ' The user gets into the personal office in the web version of the FTEC service and go to the settings page.',
    'The settings page has a button that opens any accessible telegram application (mobile, desktop, web version).',
    'Using the given vocation, the user goes to chat with assistant. The user clicks to the appropriate button.',
    'Then, on the «FTEC» service  web page settings for telegram helpers appear.',
    'After selecting the desired settings, the user saves all settings. The bot is ready to work and will send the appropriate ones\n' +
    'notification to the user.'];

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
