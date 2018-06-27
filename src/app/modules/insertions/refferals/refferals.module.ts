import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefferalsComponent} from './refferals.component';
import { RefferalsComponentRoutingModule } from './refferals-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RefferalsComponentRoutingModule
    ],
    declarations: [RefferalsComponent]
})
export class RefferalsModule { }
