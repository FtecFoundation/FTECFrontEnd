import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PreloaderComponent} from './preloader/preloader.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
        ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        PreloaderComponent,
        DropdownComponent
    ],
    declarations: [
        PreloaderComponent,
        DropdownComponent
    ]
})
export class SharedModule {
}
