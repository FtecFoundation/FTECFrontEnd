import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {AccountService} from '../services/account.service';
import {LanguageService} from '../services/language.service';


@Injectable()
export class OnlyNotAuthorizedGuard implements CanActivate {

    constructor(private _accountService: AccountService,
                private router: Router,
                private _languageService: LanguageService) {
    }

    canActivate() {
        this._accountService.isAuthorized().subscribe(() => {
            this.router.navigate(['/modules']);
        }, error1 => {
            if (error1.status === 403) {
                this._languageService.initLanguage();
                return true;
            }
        });
        return true;
    }

}
