import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileAppComponent} from '../mobile-app/mobile-app.component';
import {RouterModule} from '@angular/router';
import {CryptoacademyComponent} from './cryptoacademy.component';
import {TestLayoutComponent} from './tests/test-layout/test-layout.component';
import {TestBlockchainComponent} from './tests/test-blockchain/test-blockchain.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: CryptoacademyComponent, data: {title: 'Cryptoacademy'}},
            {path: '/:id', component: TestBlockchainComponent},
            {path: '/:id', component: TestLayoutComponent}
        ])
    ],
    exports: [RouterModule]
})
export class CryptoacademyRoutingModule { }
