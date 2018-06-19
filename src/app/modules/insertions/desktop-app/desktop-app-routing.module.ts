import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {BehavioralAnalyzerComponent} from '../behavioral-analyzer/behavioral-analyzer.component';
import {DesktopAppComponent} from './desktop-app.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: DesktopAppComponent, data: {title: 'Desktop App'}},
        ])
    ],
    exports: [RouterModule]
})
export class DesktopAppRoutingModule { }
