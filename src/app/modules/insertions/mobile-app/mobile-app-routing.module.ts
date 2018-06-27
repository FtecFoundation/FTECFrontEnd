import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ChangeLogComponent} from '../change-log/change-log.component';
import {MobileAppComponent} from './mobile-app.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: MobileAppComponent, data: {title: 'Mobile App'}},
        ])
    ],
    exports: [RouterModule]
})
export class MobileAppRoutingModule { }
