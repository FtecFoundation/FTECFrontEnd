import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {TelegramAssistantService} from '../../modules/insertions/telegram-assistant/telegram-assistant.service';

@Injectable()
export class TelegramNotEnabledGuard implements CanActivate {
    constructor(private _telegramService: TelegramAssistantService,
                private router: Router) {
    }

    canActivate() {
        this._telegramService.getTelegramData().subscribe(data => {
            this.router.navigate(['/modules/telegram-assistant/settings']);
            return false;
        }, error1 => {
            if (error1.status === 401) {
                return true;
            }
        });
        return true;
    }
}