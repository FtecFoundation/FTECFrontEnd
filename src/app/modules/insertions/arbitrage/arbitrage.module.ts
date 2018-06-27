import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArbitrageComponent} from './arbitrage.component';
import {Router, RouterModule} from '@angular/router';
import {ArbitrageRoutingModule} from './arbitrage-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ArbitrageRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [ArbitrageComponent]
})
export class ArbitrageModule {
}
