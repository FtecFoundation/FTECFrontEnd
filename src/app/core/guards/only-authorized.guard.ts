import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {AccountService} from '../services/account.service';
import {ErrorsService} from '../services/errors.service';


@Injectable()
export class OnlyAuthorizedGuard implements CanActivate {

    constructor(private _accountService: AccountService,
                private router: Router,
                private _errorsService: ErrorsService) {
    }

    canActivate() {
        this._accountService.isAuthorized().subscribe(() => {
            return true;
        }, error1 => {
            if (error1.status === 403) {
                console.log(error1);
                this._errorsService.currentError = 'Log in to see this page';
                this.router.navigate(['/auth']);
                return false;
            }
        });
        return true;
    }

}
