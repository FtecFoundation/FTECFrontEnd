import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

import {ErrorsService} from './services/errors.service';
import {OnlyAuthorizedGuard} from './guards/only-authorized.guard';
import {OnlyNotAuthorizedGuard} from './guards/only-not-authorized.guard';
import {AccountService} from './services/account.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [
        CookieService,
        AccountService,
        ErrorsService,
        OnlyAuthorizedGuard,
        OnlyNotAuthorizedGuard
    ]
})
export class CoreModule {
}
