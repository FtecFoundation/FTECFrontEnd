import {Component, Input, OnInit} from '@angular/core';
import {CryptoacademyService} from '../../../../../core/services/cryptoacademy.service';
import {Test} from '../../../../../core/models/test-cryptoacademy';
import {Router} from '@angular/router';

@Component({
    selector: 'app-all-tests',
    templateUrl: './all-tests.component.html',
    styleUrls: ['../../../insertions.scss', '../../cryptoacademy.component.scss', '../tests.component.scss']
})
export class AllTestsComponent implements OnInit {
    tests: Test[];

    constructor(private _cryptoacademyService: CryptoacademyService, private router: Router) {
    }

    ngOnInit() {
        this._cryptoacademyService.getTests().subscribe(data => {
            this.tests = data;

            this._cryptoacademyService.getTestsHistory().subscribe( data1 => {
                console.log(data1);
                console.log(this.tests);
                for (const test of this.tests) {
                    const questions = Object.keys(test.questions);
                    for (const question of questions) {
                        if (!data1.tests[test.id + '_' + question]) {
                            test.lastQuestion = Number.parseInt(question);
                            break;
                        }
                    }
                }
            });
        });
    }

    goToTest(test: Test) {
        this.router.navigate(['/modules/cryptoacademy/test', test.id, test.lastQuestion ? test.lastQuestion : 1]);
    }
}
