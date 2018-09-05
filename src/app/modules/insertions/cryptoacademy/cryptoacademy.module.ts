import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CryptoacademyRoutingModule} from './cryptoacademy-routing.module';
import {CryptoacademyComponent} from './cryptoacademy.component';
import {AllTestsComponent} from './tests/all-tests/all-tests.component';
import {TestStatusComponent} from './tests/test-status/test-status.component';
import {QuestionComponent} from './tests/question-layout/question/question.component';
import {QuestionLayoutComponent} from './tests/question-layout/question-layout.component';
import {TestStatusService} from './tests/test-status/test-status.service';
import { TestCompletedComponent } from './tests/question-layout/test-completed/test-completed.component';
import {CryptoacademyService} from "./cryptoacademy.service";
import { OrdinaryQuestionComponent } from './tests/question-layout/question/ordinary-question/ordinary-question.component';
import { ForecastingQuestionComponent } from './tests/question-layout/question/forecasting-question/forecasting-question.component';

@NgModule({
    imports: [
        CommonModule,
        CryptoacademyRoutingModule
    ],
    declarations: [
        CryptoacademyComponent,
        AllTestsComponent,
        TestStatusComponent,
        QuestionLayoutComponent,
        TestCompletedComponent,
        OrdinaryQuestionComponent,
        ForecastingQuestionComponent],
    providers: [TestStatusService, CryptoacademyService]
})
export class CryptoacademyModule {
}
