import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CryptoacademyRoutingModule} from './cryptoacademy-routing.module';
import {CryptoacademyComponent} from './cryptoacademy.component';
import {TestLayoutComponent} from './tests/test-layout/test-layout.component';
import {TestBlockchainComponent} from './tests/test-blockchain/test-blockchain.component';

@NgModule({
    imports: [
        CommonModule,
        CryptoacademyRoutingModule
    ],
    declarations: [CryptoacademyComponent,
         TestBlockchainComponent,
         TestLayoutComponent]
})
export class CryptoacademyModule {
}
