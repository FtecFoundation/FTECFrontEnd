import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangeLogRoutingModule} from './change-log-routing.module';
import {ChangeLogComponent} from './change-log.component';

@NgModule({
    imports: [
        CommonModule,
        ChangeLogRoutingModule
    ],
    declarations: [ChangeLogComponent]
})
export class ChangeLogModule {
}
