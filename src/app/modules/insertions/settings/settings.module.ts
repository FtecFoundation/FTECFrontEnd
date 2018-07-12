import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent} from './settings.component';
import { SettingsComponentRoutingModule } from './settings-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SettingsComponentRoutingModule
    ],
    declarations: [SettingsComponent]
})
export class SettingsModule { }
