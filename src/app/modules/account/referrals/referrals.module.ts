import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferralsComponent} from './referrals.component';
import { RefferalsComponentRoutingModule } from './referrals-routing.module';
import { ReferralsPopupComponent } from './referrals-popup/referrals-popup.component';
import {ReferralService} from "./referral.service";

@NgModule({
    imports: [
        CommonModule,
        RefferalsComponentRoutingModule
    ],
    declarations: [ReferralsComponent,
        ReferralsPopupComponent],
    providers: [ReferralService]
})
export class ReferralsModule { }
