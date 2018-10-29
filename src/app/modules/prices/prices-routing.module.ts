import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PricesComponent} from "./prices.component";



@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: PricesComponent, data: {title: 'Modules Prices'}},
        ])
    ],
    exports: [RouterModule]
})
export class PricesRoutingModule {
}
