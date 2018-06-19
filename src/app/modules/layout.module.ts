import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {LayoutComponent} from './layout/layout.component';
import {SmartTradingModuleComponent} from './insertions/smart-trading-module/smart-trading-module.component';
import {NewsBackgroundComponent} from './insertions/news-background/news-background.component';
import {OrderManagerComponent} from './insertions/order-manager/order-manager.component';
import {TelegramAssistantComponent} from './insertions/telegram-assistant/telegram-assistant.component';
import {CryptoacademyComponent} from './insertions/cryptoacademy/cryptoacademy.component';
import {GlobalPriceAnalyzerComponent} from './insertions/global-price-analyzer/global-price-analyzer.component';
import {PriceNotificationComponent} from './insertions/price-notification/price-notification.component';
import {PortfolioManagerComponent} from './insertions/portfolio-manager/portfolio-manager.component';
import {DesktopAppComponent} from './insertions/desktop-app/desktop-app.component';
import {MobileAppComponent} from './insertions/mobile-app/mobile-app.component';
import {VolumeAnalyzerComponent} from './insertions/volume-analyzer/volume-analyzer.component';
import {BehavioralAnalyzerComponent} from './insertions/behavioral-analyzer/behavioral-analyzer.component';
import {TrpComponent} from './insertions/trp/trp.component';
import {OnlyAuthorizedGuard} from '../core/guards/only-authorized.guard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotActiveComponent } from '../modules/not-active/not-active.component';
import {ShowModalService} from './not-active/show-modal.service';
import {routes} from './routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        NotActiveComponent
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        NotActiveComponent
    ],
    providers: [ShowModalService]
})

export class LayoutModule {
}
