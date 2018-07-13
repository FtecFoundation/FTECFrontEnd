import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsComponent} from './settings.component';
import { SettingsComponentRoutingModule } from './settings-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        SettingsComponentRoutingModule
    ],
    declarations: [SettingsComponent]
})
export class SettingsModule { }
