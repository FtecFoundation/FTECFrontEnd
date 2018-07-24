import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {LanguageService} from '../services/language.service';
import {Constants} from '../../constants';
import {CookieService} from 'ngx-cookie-service';
import {CurrentUserService} from '../services/current-user.service';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {catchError} from 'rxjs/operators/catchError';


@Injectable()
export class OnlyNotAuthorizedGuard implements CanActivate {

    constructor(private currentUserService: CurrentUserService,
                private router: Router,
                private _languageService: LanguageService,
                private cookies: CookieService) {
    }

    canActivate(): Observable<boolean> {
        if (!this.cookies.check(Constants.TOKEN_NAME)) { return Observable.of(true); }
        return this.currentUserService.getCurrentUser().pipe(
            map(value => {
                this.router.navigate(['/account']);
                return value == null;
            }), catchError(() => {
                this._languageService.initLanguage();
                return Observable.of(true);
            }));

    }

}
