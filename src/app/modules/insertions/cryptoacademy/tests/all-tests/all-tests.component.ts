import {Component, Input, OnInit} from '@angular/core';
import {CryptoacademyService} from '../../../../../core/services/cryptoacademy.service';
import {Test} from '../../../../../core/models/test-cryptoacademy';

@Component({
    selector: 'app-all-tests',
    templateUrl: './all-tests.component.html',
    styleUrls: ['../../../insertions.scss', '../../cryptoacademy.component.scss', '../tests.component.scss']
})
export class AllTestsComponent implements OnInit {
    tests: Test[];

    constructor(private _cryptoacademyService: CryptoacademyService) {
    }

    ngOnInit() {
        this._cryptoacademyService.getTests().subscribe(data => {
            this.tests = data;

            this._cryptoacademyService.getTestsHistory().subscribe(() => {
                for (const test of this.tests) {
                    const questions = Object.keys(test.questions);
                    for (const question of questions) {
                        console.log(test.id + '_' + question);
                    }
                }
            });
        });
    }
}
