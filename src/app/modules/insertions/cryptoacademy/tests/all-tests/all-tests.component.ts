import {Component, Input, OnInit} from '@angular/core';
import {CryptoacademyService} from '../../../../../core/services/cryptoacademy.service';
import {Test} from '../../../../../core/models/test-cryptoacademy';
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

            this._cryptoacademyService.getTestsHistory().subscribe( data1 => {
                for (const test of this.tests) {
                    const questions = Object.keys(test.questions);
                    test.total = questions.length;
                    for (const question of questions) {
                        if (!data1.tests[test.id + '_' + question]) {
                            test.lastQuestion = Number.parseInt(question);
                            break;
                        }
                        test.lastQuestion = Number.parseInt(question);
                    }
                }
            });
        });
    }

    goToTest(test: Test) {
        if (test.lastQuestion !== test.total) {
            this.router.navigate(['/modules/cryptoacademy/test', test.id, test.lastQuestion ? test.lastQuestion : 1]);
        }
        else { this.router.navigate(['/modules/cryptoacademy/completed', test.id]); }
    }
}
