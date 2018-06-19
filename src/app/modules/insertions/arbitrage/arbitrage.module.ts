import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArbitrageComponent} from './arbitrage.component';
import {Router, RouterModule} from '@angular/router';
import {ArbitrageRoutingModule} from './arbitrage-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ArbitrageRoutingModule
    ],
    declarations: [ArbitrageComponent]
})
export class ArbitrageModule {
}
