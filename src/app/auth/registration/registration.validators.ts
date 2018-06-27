import {AbstractControl, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {AccountService} from '../../core/services/account.service';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';

export class RegistrationValidators {
    static checkEmailNotTaken( _accountService: AccountService) {
            return (c: AbstractControl): Observable<ValidationErrors | null> => {
                return _accountService.checkEmailNotTaken(c.value).map(
                    res => {
                        return (res.response.available) ? null : {'taken': true};
                    }
                );
        };
    }

    static checkUsernameNotTaken( _accountService: AccountService) {
        return (c: AbstractControl): Observable<ValidationErrors | null> => {
            return _accountService.checkUsernameNotTaken(c.value).map(
                res => {
                    return (res.response.available) ? null : {'taken': true};
                }
            );
        };
    }

    static checkConfirmedPassword(c: AbstractControl): {[key: string]: boolean | null} {
        const password = c.get('password');
        const passwordC = c.get('confirmPassword');

        if (password.pristine || passwordC.pristine) { return null; }
        if (password.value === passwordC.value) { return null; }

        return {'match': true};
    }
}
