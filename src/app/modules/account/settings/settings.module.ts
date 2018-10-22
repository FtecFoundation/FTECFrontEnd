import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent} from './settings.component';
import { SettingsComponentRoutingModule } from './settings-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {QRCodeModule} from "angularx-qrcode";
import {SettingsService} from './settings.service';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        SettingsComponentRoutingModule,
        QRCodeModule
    ],
    providers: [SettingsService],
    declarations: [SettingsComponent]
})
export class SettingsModule { }
