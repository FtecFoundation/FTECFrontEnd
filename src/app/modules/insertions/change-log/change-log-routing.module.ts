import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ArbitrageComponent} from '../arbitrage/arbitrage.component';
import {ChangeLogComponent} from './change-log.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: ChangeLogComponent, data: {title: 'Changelog'}},
        ])
    ],
    exports: [RouterModule]
})
export class ChangeLogRoutingModule {
}
