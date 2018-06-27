import {NgModule} from '@angular/core';
import {RefferalsComponent} from './refferals.component';
import {RouterModule} from '@angular/router';



@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: RefferalsComponent, data: {title: 'Refferals'}},
        ])
    ],
    exports: [RouterModule]
})
export class RefferalsComponentRoutingModule {
}
