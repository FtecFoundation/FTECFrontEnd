import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileAppComponent} from '../mobile-app/mobile-app.component';
import {RouterModule} from '@angular/router';
import {CryptoacademyComponent} from './cryptoacademy.component';
// import {AllTestsComponent} from './tests/all-tests/all-tests.component';
// import {TestQuestionComponent} from './tests/test-question/test-question.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: CryptoacademyComponent, data: {title: 'Cryptoacademy'}, children: [
                    // {path: '', component: AllTestsComponent},
                    // {path: 'test/:id', component: TestQuestionComponent}
                ]},
        ])
    ],
    exports: [RouterModule]
})
export class CryptoacademyRoutingModule { }
