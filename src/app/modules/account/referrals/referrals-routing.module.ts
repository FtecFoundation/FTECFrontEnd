import {NgModule} from '@angular/core';
import {ReferralsComponent} from './referrals.component';
import {RouterModule} from '@angular/router';



@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: ReferralsComponent, data: {title: 'Refferals'}},
        ])
    ],
    exports: [RouterModule]
})
export class RefferalsComponentRoutingModule {
}
