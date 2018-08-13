import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

import {ErrorsService} from './services/errors-handling/errors.service';
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
import {CaptchaService} from './services/captcha.service';
import {CurrentUserService} from './services/current-user.service';
import {ServerErrorsInterceptor} from './services/errors-handling/errors.interceptor.service';
import {EtherscanService} from './services/etherscan.service';
import {ConfirmedEmailGuard} from './guards/confirmed-email.guard';
import {PreferencesService} from './services/preferences.service';
import {BinanceService} from "./services/exchanges/binance.service";
import {HitBTCService} from "./services/exchanges/hitbtc.service";
import {BittrexService} from "./services/exchanges/bittrex.service";

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
        EtherscanService,
        ErrorsService,
        OnlyAuthorizedGuard,
        OnlyNotAuthorizedGuard,
        ConfirmedEmailGuard,
        CryptocurrenciesService,
        TitlesService,
        ImageService,
        ArbitrageService,
        SocialService,
        LoaderService,
        LanguageService,
        CryptoacademyService,
        CurrentUserService,
        CaptchaService,
        PreferencesService,
        BinanceService,
        HitBTCService,
        BittrexService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ServerErrorsInterceptor,
            multi: true
        },
    ]
})
export class CoreModule {
}
