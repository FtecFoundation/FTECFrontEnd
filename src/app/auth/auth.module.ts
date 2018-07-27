import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {OnlyNotAuthorizedGuard} from '../core/guards/only-not-authorized.guard';
import {ConfirmEmailComponent} from './confirm-email/confirm-email.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {SetNewPasswordComponent} from './forgot-password/set-new-password.component';
import {RecaptchaModule} from 'ng-recaptcha';
import {BannedComponent} from './banned/banned.component';
import {EmailSentComponent} from './forgot-password/restore-sent.component'

@NgModule({
    imports: [
        SharedModule,
        RecaptchaModule.forRoot(),
        RouterModule.forChild([
            { path: 'auth', component: LoginComponent, canActivate: [OnlyNotAuthorizedGuard], data: {title: 'Log in'}},
            { path: 'registration', component: RegistrationComponent, canActivate: [OnlyNotAuthorizedGuard], data: {title: 'Registration'}},
            { path: 'sent', component: EmailSentComponent, canActivate: [OnlyNotAuthorizedGuard]},
            { path: 'restore', component: ForgotPasswordComponent, canActivate: [OnlyNotAuthorizedGuard]},
            { path: 'restore/:hash', component: SetNewPasswordComponent, canActivate: [OnlyNotAuthorizedGuard]},
            { path: 'confirm-email/:hash', component: ConfirmEmailComponent},
            { path: 'banned/:timeLeft', component: BannedComponent }
        ])
    ],
    exports: [LoginComponent, RegistrationComponent, ForgotPasswordComponent, SetNewPasswordComponent, BannedComponent, EmailSentComponent],
    declarations: [LoginComponent, RegistrationComponent, ForgotPasswordComponent, ConfirmEmailComponent, SetNewPasswordComponent, BannedComponent, EmailSentComponent]
})
export class AuthModule {
}