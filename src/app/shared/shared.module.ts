import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PreloaderComponent} from './preloader/preloader.component';
import {DropdownComponent } from './dropdown/dropdown.component';
import {SliderComponent} from "../modules/slider/slider.component";
import {FilterDropdownComponent} from "./filter-dropdown/filter-dropdown.component";
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { NumberSuffixPipe } from './pipes/number-suffix.pipe';

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
        DropdownComponent,
        SliderComponent,
        FilterDropdownComponent,
        ClickOutsideDirective,
        NumberSuffixPipe
    ],
    declarations: [
        PreloaderComponent,
        DropdownComponent,
        SliderComponent,
        FilterDropdownComponent,
        ClickOutsideDirective,
        NumberSuffixPipe
    ]
})
export class SharedModule {
}
