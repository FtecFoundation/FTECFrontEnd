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


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: 'modules', component: LayoutComponent, children: [
                    {path: 'not-active', component: NotActiveComponent},
                    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
                    {path: 'social', component: SocialComponent, data: {title: 'Social Assistant'}},
                    {path: 'arbitrage', component: ArbitrageComponent, data: {title: 'Arbitrage Assistant'}},
                    {path: 'cryptoacademy', component: EmptyComponent, data: {title: 'Cryptoacademy'}},
                    {path: 'desktop-app', component: EmptyComponent, data: {title: 'Desktop App'}},
                    {path: 'mobile-app', component: MobileAppComponent, data: {title: 'Mobile App'}},
                    {path: 'portfolio-manager', component: EmptyComponent, data: {title: 'Portfolio Manager'}},
                    {path: 'global-price-analyzer', component: EmptyComponent, data: {title: 'Global Price Analyzer'}},
                    {path: 'local-price-analyzer', component: EmptyComponent, data: {title: 'Local Price Analyzer'}},
                    {path: 'telegram-assistant', component: EmptyComponent, data: {title: 'Telegram Assistant'}},
                    {path: 'volume-analyzer', component: EmptyComponent, data: {title: 'Volume Analyzer'}},
                    {path: 'behavioral-analyzer', component: EmptyComponent, data: {title: 'Behavioral Analyzer'}},
                    {path: 'order-manager', component: EmptyComponent, data: {title: 'Order Manager'}},
                    {path: 'smart-trading-module', component: EmptyComponent, data: {title: 'Smart Trading Module'}},
                    {path: 'news-background', component: EmptyComponent, data: {title: 'News Background Analyzer'}},
                    {path: 'trp', component: EmptyComponent, data: {title: 'Trading Recommendations Platform'}},
                    {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
                    {path: 'change-log', component: ChangeLogComponent, data: {title: 'Change Log'}}
                ], canActivate: [OnlyAuthorizedGuard]
            }
        ])
    ],
    exports: [
        LayoutComponent,
        ArbitrageComponent,
        SocialComponent,
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
        DashboardComponent,
        HeaderComponent,
        NotActiveComponent
    ],
    declarations: [
        LayoutComponent,
        ArbitrageComponent,
        SocialComponent,
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
        DashboardComponent,
        HeaderComponent,
        ChangeLogComponent,
        FooterComponent,
        NotActiveComponent
    ],
    providers: [ShowModalService]
})

export class LayoutModule {
}
