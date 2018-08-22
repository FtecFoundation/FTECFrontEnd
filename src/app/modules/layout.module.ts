import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotActiveComponent } from './not-active/not-active.component';
import { ShowModalService } from './not-active/show-modal.service';
import { ConfirmMailComponent } from './confirm-mail/confirm-mail.component';
import { routes } from './routes';
import { NotificationComponent } from './account/notification/notification.component';
import { NotificationService } from './account/notification/notification.service';
import { StubComponent } from './stub/stub.component';
import { ShowStubService } from './stub/stub-modal.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ShowNotifyService } from '../shared/notify/notify.service';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxChartsModule
    ],
    exports: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        NotActiveComponent,
        StubComponent
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        NotActiveComponent,
        ConfirmMailComponent,
        StubComponent
    ],
    providers: [ShowModalService,
        NotificationComponent,
        NotificationService,
        StubComponent,
        ShowStubService,
        ShowNotifyService]
})

export class LayoutModule {
}
