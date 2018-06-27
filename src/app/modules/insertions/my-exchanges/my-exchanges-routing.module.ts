import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ChangeLogComponent} from '../change-log/change-log.component';
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
