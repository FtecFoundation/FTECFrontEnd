import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent} from './faq.component';
import { FaqComponentRoutingModule } from './faq-routing.module';
import {FaqService} from './faq.service';
import {FaqRestService} from "./faq-rest.service";

@NgModule({
    imports: [
        CommonModule,
        FaqComponentRoutingModule
    ],
    declarations: [FaqComponent],
    providers: [FaqRestService]
})
export class FaqModule { }
