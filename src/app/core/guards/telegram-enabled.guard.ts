import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {CurrentUserService} from '../services/current-user.service';
import {map} from 'rxjs/operators/map';
import {catchError} from 'rxjs/operators/catchError';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TelegramEnabledGuard implements CanActivate {
    constructor(private _currentUserService: CurrentUserService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        const redirectToIfNotEnabled = route.data['redirectToIfNotEnabled'];
        const redirectToIfEnabled = route.data['redirectToIfEnabled'];
        return this._currentUserService.getTelegramSettingsObs(true).pipe(
            map((settings) => {
                console.log(settings);
                if (!settings.chatId) {
                    if (redirectToIfNotEnabled) { this.router.navigateByUrl(redirectToIfNotEnabled); }
                    return redirectToIfNotEnabled == null;
                }
                if (redirectToIfEnabled) { this.router.navigateByUrl(redirectToIfEnabled); }
                return redirectToIfEnabled == null;
            }),
            catchError(err => {
                console.log(err);
                if (redirectToIfNotEnabled) { this.router.navigateByUrl(redirectToIfNotEnabled); }
                return Observable.of(redirectToIfNotEnabled == null);
            })
        );
    }
}
