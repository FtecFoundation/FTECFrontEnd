import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VolumeAnalyzerRoutingModule} from './volume-analyzer-routing.module';
import {VolumeAnalyzerComponent} from './volume-analyzer.component';
import { SharedModule } from '../../../shared/shared.module';
import {VolumeAnalyzerService} from "./volume-analyzer.service";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        VolumeAnalyzerRoutingModule
    ],
    declarations: [VolumeAnalyzerComponent],
    providers: [VolumeAnalyzerService]
})

export class VolumeAnalyzerModule {
}
