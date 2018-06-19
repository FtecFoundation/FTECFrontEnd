import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {LayoutComponent} from './layout/layout.component';
import {SocialComponent} from './insertions/social/social.component';
import {ArbitrageComponent} from './insertions/arbitrage/arbitrage.component';
import {EmptyComponent} from './insertions/empty/empty.component';
import {SmartTradingModuleComponent} from './insertions/smart-trading-module/smart-trading-module.component';
import {NewsBackgroundComponent} from './insertions/news-background/news-background.component';
import {OrderManagerComponent} from './insertions/order-manager/order-manager.component';
import {TelegramAssistantComponent} from './insertions/telegram-assistant/telegram-assistant.component';
import {CryptoacademyComponent} from './insertions/cryptoacademy/cryptoacademy.component';
import {GlobalPriceAnalyzerComponent} from './insertions/global-price-analyzer/global-price-analyzer.component';
import {LocalPriceAnalyzerComponent} from './insertions/local-price-analyzer/local-price-analyzer.component';
import {PortfolioManagerComponent} from './insertions/portfolio-manager/portfolio-manager.component';
import {DesktopAppComponent} from './insertions/desktop-app/desktop-app.component';
import {MobileAppComponent} from './insertions/mobile-app/mobile-app.component';
import {VolumeAnalyzerComponent} from './insertions/volume-analyzer/volume-analyzer.component';
import {BehavioralAnalyzerComponent} from './insertions/behavioral-analyzer/behavioral-analyzer.component';
import {TrpComponent} from './insertions/trp/trp.component';
import {OnlyAuthorizedGuard} from '../core/guards/only-authorized.guard';
import {DashboardComponent} from './insertions/dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ChangeLogComponent } from './insertions/change-log/change-log.component';
import { FooterComponent } from './footer/footer.component';
import { NotActiveComponent } from '../modules/not-active/not-active.component';
import {ShowModalService} from './not-active/show-modal.service';
import {MyExchangesComponent} from './insertions/my-exchanges/my-exchanges.component';
import {ArbitrageModule} from './insertions/arbitrage/arbitrage.module';
import {SocialModule} from './insertions/social/social.module';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: 'modules', component: LayoutComponent, children: [
                    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
                    {path: 'not-active', component: NotActiveComponent},
                    {path: 'social', loadChildren: './insertions/social/social.module#SocialModule'},
                    {path: 'arbitrage', loadChildren: './insertions/arbitrage/arbitrage.module#ArbitrageModule'},
                    {path: 'cryptoacademy', component: CryptoacademyComponent, data: {title: 'Cryptoacademy'}},
                    {path: 'desktop-app', component: DesktopAppComponent, data: {title: 'Desktop App'}},
                    {path: 'mobile-app', component: MobileAppComponent, data: {title: 'Mobile App'}},
                    {path: 'portfolio-manager', component: PortfolioManagerComponent, data: {title: 'Portfolio Manager'}},
                    {path: 'global-price-analyzer', component: GlobalPriceAnalyzerComponent, data: {title: 'Global Price Analyzer'}},
                    {path: 'price-notification', component: LocalPriceAnalyzerComponent, data: {title: 'Module of Price Notification'}},
                    {path: 'telegram-assistant', component: TelegramAssistantComponent, data: {title: 'Telegram Assistant'}},
                    {path: 'volume-analyzer', component: VolumeAnalyzerComponent, data: {title: 'Volume Analyzer'}},
                    {path: 'behavioral-analyzer', component: BehavioralAnalyzerComponent, data: {title: 'Behavioral Analyzer'}},
                    {path: 'order-manager', component: OrderManagerComponent, data: {title: 'Order Manager'}},
                    {path: 'smart-trading-module', component: SmartTradingModuleComponent, data: {title: 'Smart Trading Module'}},
                    {path: 'news-background', component: NewsBackgroundComponent, data: {title: 'News Background Analyzer'}},
                    {path: 'trp', component: TrpComponent, data: {title: 'Trading Recommendations Platform'}},
                    {path: 'dashboard', loadChildren: './insertions/dashboard/dashboard.module#DashboardModule'},
                    {path: 'change-log', component: ChangeLogComponent, data: {title: 'Changelog'}},
                    {path: 'my-exchanges', component: MyExchangesComponent, data: {title: 'My Exchanges'}}
                ], canActivate: [OnlyAuthorizedGuard]
            }
        ])
    ],
    exports: [
        RouterModule,
        LayoutComponent,
        EmptyComponent,
        SmartTradingModuleComponent,
        NewsBackgroundComponent,
        OrderManagerComponent,
        TelegramAssistantComponent,
        CryptoacademyComponent,
        GlobalPriceAnalyzerComponent,
        LocalPriceAnalyzerComponent,
        PortfolioManagerComponent,
        DesktopAppComponent,
        MobileAppComponent,
        VolumeAnalyzerComponent,
        BehavioralAnalyzerComponent,
        TrpComponent,
        HeaderComponent,
        NotActiveComponent,
        MyExchangesComponent
    ],
    declarations: [
        LayoutComponent,
        EmptyComponent,
        SmartTradingModuleComponent,
        NewsBackgroundComponent,
        OrderManagerComponent,
        TelegramAssistantComponent,
        CryptoacademyComponent,
        GlobalPriceAnalyzerComponent,
        LocalPriceAnalyzerComponent,
        PortfolioManagerComponent,
        DesktopAppComponent,
        MobileAppComponent,
        VolumeAnalyzerComponent,
        BehavioralAnalyzerComponent,
        TrpComponent,
        HeaderComponent,
        ChangeLogComponent,
        FooterComponent,
        NotActiveComponent,
        MyExchangesComponent
    ],
    providers: [ShowModalService]
})

export class LayoutModule {
}
