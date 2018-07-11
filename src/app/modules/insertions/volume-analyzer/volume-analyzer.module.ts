import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VolumeAnalyzerRoutingModule} from './volume-analyzer-routing.module';
import {VolumeAnalyzerComponent} from './volume-analyzer.component';
import {VolumePopupComponent} from './volume-popup/volume-popup.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        VolumeAnalyzerRoutingModule
    ],
    declarations: [VolumeAnalyzerComponent,
    VolumePopupComponent]
})

export class VolumeAnalyzerModule {
}
