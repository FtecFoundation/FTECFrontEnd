import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent} from './faq.component';
import { FaqComponentRoutingModule } from './faq-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FaqComponentRoutingModule
    ],
    declarations: [FaqComponent]
})
export class FaqModule { }
