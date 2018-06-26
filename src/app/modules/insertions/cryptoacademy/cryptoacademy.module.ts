import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CryptoacademyRoutingModule} from './cryptoacademy-routing.module';
import {CryptoacademyComponent} from './cryptoacademy.component';
import {AllTestsComponent} from './tests/all-tests/all-tests.component';
import {TestQuestionComponent} from './tests/test-question/test-question.component';

@NgModule({
    imports: [
        CommonModule,
        CryptoacademyRoutingModule
    ],
    declarations: [CryptoacademyComponent,
         TestQuestionComponent,
         AllTestsComponent]
})
export class CryptoacademyModule {
}
