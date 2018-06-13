import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {OnlyNotAuthorizedGuard} from '../core/guards/only-not-authorized.guard';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'auth', component: LoginComponent, canActivate: [OnlyNotAuthorizedGuard]},
            { path: 'registration', component: RegistrationComponent, canActivate: [OnlyNotAuthorizedGuard]},
            { path: 'restore', component: ForgotPasswordComponent, canActivate: [OnlyNotAuthorizedGuard]},
            { path: 'confirm', component: ConfirmEmailComponent},
        ])
    ],
    exports: [LoginComponent, RegistrationComponent, ForgotPasswordComponent],
    declarations: [LoginComponent, RegistrationComponent, ForgotPasswordComponent, ConfirmEmailComponent]
})
export class AuthModule {
}
