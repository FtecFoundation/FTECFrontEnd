import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CryptoacademyComponent} from './cryptoacademy.component';
import {AllTestsComponent} from './tests/all-tests/all-tests.component';
import {QuestionComponent} from './tests/question-layout/question/question.component';
import {QuestionLayoutComponent} from './tests/question-layout/question-layout.component';
import {TestCompletedComponent} from './tests/question-layout/test-completed/test-completed.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: CryptoacademyComponent, data: {title: 'Cryptoacademy'}, children: [
                    {path: '', component: AllTestsComponent},
                    {path: 'test/:testId/:questionId', component: QuestionLayoutComponent},
                    {path: 'completed/:testId', component: TestCompletedComponent}
                ]
            },
        ])
    ],
    exports: [RouterModule]
})
export class CryptoacademyRoutingModule {
}
