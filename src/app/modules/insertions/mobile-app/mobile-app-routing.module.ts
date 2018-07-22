import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
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
