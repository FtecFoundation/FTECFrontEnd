import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferralsComponent} from './referrals.component';
import { RefferalsComponentRoutingModule } from './referrals-routing.module';
import { ReferralsPopupComponent } from './referrals-popup/referrals-popup.component';

@NgModule({
    imports: [
        CommonModule,
        RefferalsComponentRoutingModule
    ],
    declarations: [ReferralsComponent,
        ReferralsPopupComponent]
})
export class ReferralsModule { }
