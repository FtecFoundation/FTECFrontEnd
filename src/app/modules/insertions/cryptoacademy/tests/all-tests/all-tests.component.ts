import {Component, Input, OnInit} from '@angular/core';
import {CryptoacademyService} from '../../cryptoacademy.service';
import {Test, TestHistory} from '../../../../../core/models/test-cryptoacademy';
import {Router} from '@angular/router';
import {TestStatusService} from '../test-status/test-status.service';

@Component({
    selector: 'app-all-tests',
    templateUrl: './all-tests.component.html',
    styleUrls: ['../../../insertions.scss', '../../cryptoacademy.component.scss', '../tests.component.scss']
})
export class AllTestsComponent implements OnInit {
    tests: Test[];

    constructor(private _cryptoacademyService: CryptoacademyService, private router: Router,
                public _testStatusService: TestStatusService) {
    }

    ngOnInit() {
        this._cryptoacademyService.getTests().subscribe(data => {
            this.tests = data;

            this._cryptoacademyService.getTestsHistory().subscribe(data1 => {
                this.fillLastQuestion(data1);
                this.fillPassed(data1);
            });
        });
    }

    goToTest(test: Test) {
        if (test.lastQuestion !== test.totalQuestions) {
            this.router.navigate(['/modules/cryptoacademy/test', test.id, test.lastQuestion ? test.lastQuestion : 1]);
        } else {
            this.router.navigate(['/modules/cryptoacademy/completed', test.id]);
        }
    }

    fillPassed(history: TestHistory) {
        for (const test of this.tests) {
            test.passed = 0;
            for (let i = 1; i <= test.totalQuestions; i++) {
                if (history.tests[test.id + '_' + i] && (history.tests[test.id + '_' + i].selectedAnswer !== -1)) {
                    test.passed++;
                }
            }
        }
    }

    fillLastQuestion(history: TestHistory) {
        for (const test of this.tests) {
            for (let i = 1; i <= test.totalQuestions; i++) {
                if (!history.tests[test.id + '_' + i] || (history.tests[test.id + '_' + i].selectedAnswer === -1)) {
                    test.lastQuestion = i;
                    break;
                }
                test.lastQuestion = i;
            }
        }
    }
}
