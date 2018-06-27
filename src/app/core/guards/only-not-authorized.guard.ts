import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {AccountService} from '../services/account.service';
import {ErrorsService} from '../services/errors.service';


@Injectable()
export class OnlyNotAuthorizedGuard implements CanActivate {

    constructor(private _accountService: AccountService,
                private router: Router) {
    }

    canActivate() {
        this._accountService.isAuthorized().subscribe(() => {
            this.router.navigate(['/modules']);
        }, error1 => {
            if (error1.status === 403) {
                return true;
            }
        });
        return true;
    }

}
