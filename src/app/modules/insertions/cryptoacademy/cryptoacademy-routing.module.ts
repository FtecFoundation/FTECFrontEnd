import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileAppComponent} from '../mobile-app/mobile-app.component';
import {RouterModule} from '@angular/router';
import {CryptoacademyComponent} from './cryptoacademy.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: CryptoacademyComponent, data: {title: 'Cryptoacademy'}},
        ])
    ],
    exports: [RouterModule]
})
export class CryptoacademyRoutingModule { }
