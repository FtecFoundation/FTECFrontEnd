import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PreloaderComponent} from './preloader/preloader.component';
import {DropdownComponent } from './dropdown/dropdown.component';
import {SliderComponent} from "../modules/slider/slider.component";
import {FilterDropdownComponent} from "./filter-dropdown/filter-dropdown.component";
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { NumberSuffixPipe } from './pipes/number-suffix.pipe';
import {HeaderComponent} from "../modules/header/header.component";
import {RouterModule} from "@angular/router";
import { InfoPopupComponent } from './info-popup/info-popup.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule
        ],
    exports: [
        InfoPopupComponent,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        PreloaderComponent,
        DropdownComponent,
        SliderComponent,
        FilterDropdownComponent,
        ClickOutsideDirective,
        NumberSuffixPipe,
        HeaderComponent,
        RouterModule
    ],
    declarations: [
        InfoPopupComponent,
        PreloaderComponent,
        DropdownComponent,
        SliderComponent,
        FilterDropdownComponent,
        ClickOutsideDirective,
        NumberSuffixPipe,
        HeaderComponent,
        InfoPopupComponent
    ]
})
export class SharedModule {
}
