import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MyExchangesComponent} from './my-exchanges.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: MyExchangesComponent, data: {title: 'My Exchanges'}},
        ])
    ],
    exports: [RouterModule]
})
export class MyExchangesRoutingModule {
}
