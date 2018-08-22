import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PreloaderComponent} from './preloader/preloader.component';
import {DropdownComponent } from './dropdown/dropdown.component';
import {NotifyComponent} from './notify/notify.component';
import {SliderComponent} from "../modules/slider/slider.component";
import {FilterDropdownComponent} from "./filter-dropdown/filter-dropdown.component";
import { ClickOutsideDirective } from './directives/click-outside.directive';

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
        NotifyComponent,
        SliderComponent,
        FilterDropdownComponent
    ],
    declarations: [
        PreloaderComponent,
        DropdownComponent,
        NotifyComponent,
        SliderComponent,
        FilterDropdownComponent,
        ClickOutsideDirective
    ]
})
export class SharedModule {
}
