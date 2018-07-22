import {NgModule} from '@angular/core';
import {SupportComponent} from './support.component';
import {RouterModule} from '@angular/router';



@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: SupportComponent, data: {title: 'Help Center'}},
        ])
    ],
    exports: [RouterModule]
})
export class SupportComponentRoutingModule {
}
