import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyExchangesRoutingModule} from './my-exchanges-routing.module';
import {MyExchangesComponent} from './my-exchanges.component';

@NgModule({
    imports: [
        CommonModule,
        MyExchangesRoutingModule
    ],
    declarations: [MyExchangesComponent]
})
export class MyExchangesModule {
}
