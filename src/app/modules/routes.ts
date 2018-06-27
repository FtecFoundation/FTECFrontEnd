import {LayoutComponent} from './layout/layout.component';
import {OnlyAuthorizedGuard} from '../core/guards/only-authorized.guard';
import {NotActiveComponent} from './not-active/not-active.component';

export const routes = [
    {
        path: 'modules', component: LayoutComponent, children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'not-active', component: NotActiveComponent},
            {path: 'social', loadChildren: './insertions/social/social.module#SocialModule'},
            {path: 'arbitrage', loadChildren: './insertions/arbitrage/arbitrage.module#ArbitrageModule'},
            {path: 'cryptoacademy', loadChildren: './insertions/cryptoacademy/cryptoacademy.module#CryptoacademyModule'},
            {path: 'desktop-app', loadChildren: './insertions/desktop-app/desktop-app.module#DesktopAppModule'},
            {path: 'mobile-app', loadChildren: './insertions/mobile-app/mobile-app.module#MobileAppModule'},
            {path: 'portfolio-manager', loadChildren: './insertions/portfolio-manager/portfolio-manager.module#PortfolioManagerModule'},
            {path: 'global-price-analyzer',
                loadChildren: './insertions/global-price-analyzer/global-price-analyzer.module#GlobalPriceAnalyzerModule'},
            {path: 'price-notification', loadChildren: './insertions/price-notification/price-notification.module#PriceNotificationModule'},
            {path: 'telegram-assistant', loadChildren: './insertions/telegram-assistant/telegram-assistant.module#TelegramAssistantModule'},
            {path: 'volume-analyzer', loadChildren: './insertions/volume-analyzer/volume-analyzer.module#VolumeAnalyzerModule'},
            {path: 'behavioral-analyzer',
                loadChildren: './insertions/behavioral-analyzer/behavioral-analyzer.module#BehavioralAnalyzerModule'},
            {path: 'order-manager', loadChildren: './insertions/order-manager/order-manager.module#OrderManagerModule'},
            {path: 'smart-trading-module',
                loadChildren: './insertions/smart-trading-module/smart-trading-module.module#SmartTradingModuleModule'},
            {path: 'news-background', loadChildren: './insertions/news-background/news-background.module#NewsBackgroundModule'},
            {path: 'trp', loadChildren: './insertions/trp/trp.module#TrpModule'},
            {path: 'dashboard', loadChildren: './insertions/dashboard/dashboard.module#DashboardModule'},
            {path: 'change-log', loadChildren: './insertions/change-log/change-log.module#ChangeLogModule'},
            {path: 'my-exchanges', loadChildren: './insertions/my-exchanges/my-exchanges.module#MyExchangesModule'},
            {path: 'settings', loadChildren: './insertions/settings/settings.module#SettingsModule'},
            {path: 'support', loadChildren: './insertions/support/support.module#SupportModule'}
        ], canActivate: [OnlyAuthorizedGuard]
    }
];
