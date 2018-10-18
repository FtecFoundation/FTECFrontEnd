import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent} from './support.component';
import { SupportComponentRoutingModule } from './support-routing.module';
import {FormsModule} from "@angular/forms";
import {SupportService} from "./support.service";

@NgModule({
    imports: [
        CommonModule,
        SupportComponentRoutingModule,
        FormsModule
    ],
    declarations: [SupportComponent],
    providers: [SupportService]
})
export class SupportModule { }
