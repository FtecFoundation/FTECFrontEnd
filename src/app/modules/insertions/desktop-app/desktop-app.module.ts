import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DesktopAppRoutingModule} from './desktop-app-routing.module';
import {DesktopAppComponent} from './desktop-app.component';

@NgModule({
    imports: [
        CommonModule,
        DesktopAppRoutingModule
    ],
    declarations: [DesktopAppComponent]
})
export class DesktopAppModule {
}
