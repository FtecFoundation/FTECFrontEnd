import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {LayoutModule} from './modules/layout.module';

import {routes} from './routes';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'ftec-client'}),
        RouterModule.forRoot(routes),
        TransferHttpCacheModule,
        CoreModule,
        AuthModule,
        LayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
