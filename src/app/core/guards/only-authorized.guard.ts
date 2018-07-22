import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {AccountService} from '../services/account.service';
import {ErrorsService} from '../services/errors-handling/errors.service';
import {CurrentUserService} from '../services/current-user.service';
import {CookieService} from 'ngx-cookie-service';
import {Constants} from '../../constants';
import {map} from 'rxjs/operators/map';
import {catchError} from 'rxjs/operators/catchError';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class OnlyAuthorizedGuard implements CanActivate {


    constructor(private _accountService: AccountService,
                private router: Router,
                private _errorsService: ErrorsService,
                public currentUserService: CurrentUserService,
                private cookies: CookieService) {
    }

    canActivate(): Observable<boolean> {
        console.log('Started only auth guard');
        if (!this.cookies.check(Constants.TOKEN_NAME)) {
            return this.formError();
        }
        return this.currentUserService.getCurrentUser().pipe(
            map(value => {
                console.log('Finished only auth guard');
                return value != null;
            }),
            catchError(this.formError)
        );
    }

    formError(): Observable<boolean> {
        this._errorsService.currentError = 'Log in to see this page';
        this.router.navigate(['/auth']);
        return Observable.of(false);
    }
}
