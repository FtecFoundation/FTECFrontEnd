import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefferalsComponent} from './refferals.component';
import { RefferalsComponentRoutingModule } from './refferals-routing.module';
import { RefferalsPopupComponent } from './refferals-popup/refferals-popup.component';

@NgModule({
    imports: [
        CommonModule,
        RefferalsComponentRoutingModule
    ],
    declarations: [RefferalsComponent,
        RefferalsPopupComponent]
})
export class RefferalsModule { }
