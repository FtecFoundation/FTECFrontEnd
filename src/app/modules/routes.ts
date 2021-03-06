import {LayoutComponent} from './layout/layout.component';
import {OnlyAuthorizedGuard} from '../core/guards/only-authorized.guard';
import {NotActiveComponent} from './not-active/not-active.component';
import {ConfirmedEmailGuard} from '../core/guards/confirmed-email.guard';
import { ShowStubService } from './stub/stub-modal.service';

export const routes = [
    {
        path: 'modules', component: LayoutComponent, children: [
            {path: 'not-active', component: NotActiveComponent},
            {path: 'stub', component: ShowStubService},
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
            {path: 'telegram-assistant', loadChildren: './insertions/telegram-assistant/telegram-assistant.module#TelegramAssistantModule'}
                ],
        // Do not need OnlyAuthorized - confirmed email will fail if user has no token/unauthenticated
        canActivate: [ConfirmedEmailGuard]
    },
    {
        path: 'account', component: LayoutComponent, canActivate: [OnlyAuthorizedGuard], children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'dashboard', loadChildren: './account/dashboard/dashboard.module#DashboardModule'},
            {path: 'referrals', loadChildren: './account/referrals/referrals.module#ReferralsModule'},
            {path: 'settings', loadChildren: './account/settings/settings.module#SettingsModule'},
            {path: 'notification', loadChildren: './account/notification/notification.module#NotificationModule'},
            {path: 'payment', loadChildren: './account/payment/payment.module#PaymentModule'},
            {path: 'my-exchanges', loadChildren: './account/my-exchanges/my-exchanges.module#MyExchangesModule'}
        ]
    },
    // TODO remove canActivate and layout component when independent to user layout will be created
    {path: 'info', component: LayoutComponent, canActivate: [OnlyAuthorizedGuard], children: [
            {path: 'change-log', loadChildren: './change-log/change-log.module#ChangeLogModule'},
            {path: 'faq', loadChildren: './faq/faq.module#FaqModule'},
            {path: 'support', loadChildren: './account/support/support.module#SupportModule'},
            {path: 'prices', loadChildren: './prices/prices.module#PricesModule'},
            {path: 'exchanges-support', loadChildren: './working-exchanges/working-exchanges.module#WorkingExchangesModule'}
        ]
    }
];
