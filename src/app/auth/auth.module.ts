import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {OnlyNotAuthorizedGuard} from '../core/guards/only-not-authorized.guard';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import {SetNewPasswordComponent} from './forgot-password/set-new-password.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'auth', component: LoginComponent, canActivate: [OnlyNotAuthorizedGuard], data: {title: 'Log in'}},
            { path: 'registration', component: RegistrationComponent, canActivate: [OnlyNotAuthorizedGuard], data: {title: 'Registration'}},
            { path: 'restore', component: ForgotPasswordComponent, canActivate: [OnlyNotAuthorizedGuard]},
            { path: 'restore/:hash', component: SetNewPasswordComponent, canActivate: [OnlyNotAuthorizedGuard]},
            { path: 'confirm-email/:hash', component: ConfirmEmailComponent},
        ])
    ],
    exports: [LoginComponent, RegistrationComponent, ForgotPasswordComponent, SetNewPasswordComponent],
    declarations: [LoginComponent, RegistrationComponent, ForgotPasswordComponent, ConfirmEmailComponent, SetNewPasswordComponent]
})
export class AuthModule {
}
