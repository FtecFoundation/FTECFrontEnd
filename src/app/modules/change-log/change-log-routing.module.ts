import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
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
