import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {WorkingExchangesComponent} from "./working-exchanges.component";



@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: WorkingExchangesComponent, data: {title: 'Exchanges Support'}},
        ])
    ],
    exports: [RouterModule]
})
export class WorkingEchangesRoutingModule {
}
