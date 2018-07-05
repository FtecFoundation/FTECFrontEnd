import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PortfolioManagerComponent} from './portfolio-manager.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: PortfolioManagerComponent, data: {title: 'Portfolio Manager'}},
        ])
    ],
    exports: [RouterModule]
})
export class PortfolioManagerRoutingModule { }
