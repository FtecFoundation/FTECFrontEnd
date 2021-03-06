import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {HeaderComponent } from './header/header.component';
import {FooterComponent } from './footer/footer.component';
// import {routes} from './routes';
// import {LayoutComponent} from './layout/layout.component';
// import {NotActiveComponent } from './not-active/not-active.component';
// import {ShowModalService} from './not-active/show-modal.service';
// import {ConfirmMailComponent} from './confirm-mail/confirm-mail.component';
// import {NotificationComponent} from './account/notification/notification.component';

@NgModule({
    imports: [
        SharedModule,
        // RouterModule.forChild(routes)
    ],
    exports: [
        // LayoutComponent,
        HeaderComponent,
        FooterComponent,
        // NotActiveComponent
    ],
    declarations: [
        // LayoutComponent,
        HeaderComponent,
        FooterComponent
        // NotActiveComponent,
        // ConfirmMailComponent
    ],
    providers: []
})

export class LayoutModule {
}
