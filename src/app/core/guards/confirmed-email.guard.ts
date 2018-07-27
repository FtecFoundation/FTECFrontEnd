import {CanActivate, Router} from '@angular/router';
import {CurrentUserService} from '../services/current-user.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {catchError} from 'rxjs/operators/catchError';
import {ErrorsService} from '../services/errors-handling/errors.service';
import {StubComponent} from '../../modules/stub/stub.component';

@Injectable()
export class ConfirmedEmailGuard implements CanActivate {
    constructor(private currentUserService: CurrentUserService,
                private _errorsService: ErrorsService,
                private router: Router,
                private stubComponent: StubComponent) {}
    canActivate(): Observable<boolean> {
        return this.currentUserService.getCurrentUser().pipe(
            map(user => {
                if (!user.confirmedEmail) {
                     this.router.navigateByUrl('/account/dashboard');
                     this.stubComponent.showPopup('Confirm email to open this page', 'You can\'t use any modules or payments without confirming email');
                    }
                return true;
            }),
            catchError(err => {
                this._errorsService.currentError = 'Log in to see this page';
                this.router.navigateByUrl('/auth');
                return Observable.of(true);
            })
        );
    }
}
