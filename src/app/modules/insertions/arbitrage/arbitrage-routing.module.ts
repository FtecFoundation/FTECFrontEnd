import {NgModule} from '@angular/core';
import {ArbitrageComponent} from './arbitrage.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: ArbitrageComponent, data: {title: 'Arbitrage Assistant'}},
        ])
    ],
    exports: [RouterModule]
})
export class ArbitrageRoutingModule {
}
