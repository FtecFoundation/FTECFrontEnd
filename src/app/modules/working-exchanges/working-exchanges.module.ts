import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkingExchangesComponent} from './working-exchanges.component';
import {WorkingEchangesRoutingModule} from "./working-echanges-routing.module";

@NgModule({
    imports: [
        CommonModule,
        WorkingEchangesRoutingModule
    ],
    declarations: [WorkingExchangesComponent]
})
export class WorkingExchangesModule {
}
