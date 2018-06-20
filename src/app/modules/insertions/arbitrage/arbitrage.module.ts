import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArbitrageComponent} from './arbitrage.component';
import {Router, RouterModule} from '@angular/router';
import {ArbitrageRoutingModule} from './arbitrage-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ArbitrageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [ArbitrageComponent]
})
export class ArbitrageModule {
}
