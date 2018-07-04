import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

import {ErrorsService} from './services/errors.service';
import {OnlyAuthorizedGuard} from './guards/only-authorized.guard';
import {OnlyNotAuthorizedGuard} from './guards/only-not-authorized.guard';
import {AccountService} from './services/account.service';
import {CryptocurrenciesService} from './services/cryptocurrencies.service';
import {TitlesService} from './services/titles.service';
import {ImageService} from './services/image.service';
import {ArbitrageService} from './services/arbitrage.service';
import {SocialService} from './services/social.service';
import {LoaderComponent } from './loader/loader.component';
import {LoaderService} from './loader/loader.service';
import {LanguageService} from './services/language.service';
import {CryptoacademyService} from './services/cryptoacademy.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [LoaderComponent],
    exports: [LoaderComponent],
    providers: [
        CookieService,
        AccountService,
        ErrorsService,
        OnlyAuthorizedGuard,
        OnlyNotAuthorizedGuard,
        CryptocurrenciesService,
        TitlesService,
        ImageService,
        ArbitrageService,
        SocialService,
        LoaderService,
        LanguageService,
        CryptoacademyService,
        CaptchaService
    ]
})
export class CoreModule {
}
