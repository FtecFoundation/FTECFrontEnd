import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CryptoacademyRoutingModule} from './cryptoacademy-routing.module';
import {CryptoacademyComponent} from './cryptoacademy.component';
import {AllTestsComponent} from './tests/all-tests/all-tests.component';
import {TestStatusComponent} from './tests/test-status/test-status.component';
import {QuestionComponent} from './tests/question-layout/question/question.component';
import {QuestionLayoutComponent} from './tests/question-layout/question-layout.component';
import {TestStatusService} from './tests/test-status/test-status.service';

@NgModule({
    imports: [
        CommonModule,
        CryptoacademyRoutingModule
    ],
    declarations: [
        CryptoacademyComponent,
        AllTestsComponent,
        TestStatusComponent,
        QuestionComponent,
        QuestionLayoutComponent],
    providers: [TestStatusService]
})
export class CryptoacademyModule {
}
