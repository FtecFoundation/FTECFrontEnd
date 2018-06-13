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


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: 'modules', component: LayoutComponent, children: [
                    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
                    {path: 'social', component: SocialComponent},
                    {path: 'arbitrage', component: ArbitrageComponent},
                    {path: 'cryptoacademy', component: EmptyComponent},
                    {path: 'behavioral-analyzer', component: EmptyComponent},
                    {path: 'desktop-app', component: EmptyComponent},
                    {path: 'mobile-app', component: EmptyComponent},
                    {path: 'portfolio-manager', component: EmptyComponent},
                    {path: 'global-price-analyzer', component: EmptyComponent},
                    {path: 'local-price-analyzer', component: EmptyComponent},
                    {path: 'telegram-assistant', component: EmptyComponent},
                    {path: 'volume-analyzer', component: EmptyComponent},
                    {path: 'behavioral-analyzer', component: EmptyComponent},
                    {path: 'order-manager', component: EmptyComponent},
                    {path: 'smart-trading-module', component: EmptyComponent},
                    {path: 'news-background', component: EmptyComponent},
                    {path: 'trp', component: EmptyComponent},
                    {path: 'dashboard', component: DashboardComponent}
                ], canActivate: [OnlyAuthorizedGuard]
            }
        ])
    ],
    exports: [LayoutComponent, ArbitrageComponent, SocialComponent, EmptyComponent],
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
        HeaderComponent
    ]
})

export class LayoutModule {
}
