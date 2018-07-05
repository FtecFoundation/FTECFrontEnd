import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {LanguageService} from '../services/language.service';
import {AccountService} from '../services/account.service';
import {TelegramAssistantService} from '../../modules/insertions/telegram-assistant/telegram-assistant.service';

@Injectable()
export class TelegramEnabledGuard implements CanActivate {
    constructor(private _telegramService: TelegramAssistantService,
                private router: Router) {
    }

    canActivate() {
        this._telegramService.getTelegramData().subscribe(data => {
            console.log(data);
            if (data !== null) {
                return true;
            } else {
                this.router.navigate(['/modules/telegram-assistant']);
                return false;
            }
        });
        return true;
    }
}
