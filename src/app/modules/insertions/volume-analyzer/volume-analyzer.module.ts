import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VolumeAnalyzerRoutingModule} from './volume-analyzer-routing.module';
import {VolumeAnalyzerComponent} from './volume-analyzer.component';

@NgModule({
    imports: [
        CommonModule,
        VolumeAnalyzerRoutingModule
    ],
    declarations: [VolumeAnalyzerComponent]
})
export class VolumeAnalyzerModule {
}
