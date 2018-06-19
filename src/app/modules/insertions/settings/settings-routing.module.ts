import {NgModule} from '@angular/core';
import {SettingsComponent} from './settings.component';
import {RouterModule} from '@angular/router';



@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: SettingsComponent, data: {title: 'Settings'}},
        ])
    ],
    exports: [RouterModule]
})
export class SettingsComponentRoutingModule {
}
