import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CryptoacademyRoutingModule} from './cryptoacademy-routing.module';
import {CryptoacademyComponent} from './cryptoacademy.component';

@NgModule({
    imports: [
        CommonModule,
        CryptoacademyRoutingModule
    ],
    declarations: [CryptoacademyComponent]
})
export class CryptoacademyModule {
}
