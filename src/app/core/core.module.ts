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
// import {MainPreloaderComponent} from './main-preloader/main-preloader.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        // MainPreloaderComponent
    ],
    exports: [
        // MainPreloaderComponent
    ],
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
        SocialService
    ]
})
export class CoreModule {
}
