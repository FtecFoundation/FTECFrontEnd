import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent } from './header/header.component';
import {FooterComponent } from './footer/footer.component';
import {NotActiveComponent } from '../modules/not-active/not-active.component';
import {ShowModalService} from './not-active/show-modal.service';
import {routes} from './routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
