import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent} from './support.component';
import { SupportComponentRoutingModule } from './support-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SupportComponentRoutingModule
    ],
    declarations: [SupportComponent]
})
export class SupportModule { }
