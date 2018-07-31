import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyExchangesRoutingModule} from './my-exchanges-routing.module';
import {MyExchangesComponent} from './my-exchanges.component';
import {SharedModule} from '../../../shared/shared.module';
import {MyExchangesService} from './my-exchanges.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MyExchangesRoutingModule
    ],
    declarations: [MyExchangesComponent],
    providers: [MyExchangesService]
})
export class MyExchangesModule {
}
