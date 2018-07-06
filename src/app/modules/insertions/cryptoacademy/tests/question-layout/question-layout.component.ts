import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Test, TestHistory} from '../../../../../core/models/test-cryptoacademy';
import {CryptoacademyService} from '../../../../../core/services/cryptoacademy.service';
import {TestStatusService} from '../test-status/test-status.service';

@Component({
    selector: 'app-test-blockchain',
    templateUrl: './question-layout.component.html',
    styleUrls: ['../../../insertions.scss', '../../cryptoacademy.component.scss', '../tests.component.scss']
})
export class QuestionLayoutComponent implements OnInit {
    test: Test;
    questionId: string;

    constructor(private activatedRoute: ActivatedRoute,
                private _cryptoacademyService: CryptoacademyService,
                private router: Router,
                public _testStatusService: TestStatusService) {
        this.router.events.subscribe((e) => {
            this.questionId = this.activatedRoute.snapshot.paramMap.get('questionId');
        });
    }

    ngOnInit() {
        const testId = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('testId'));
        this._cryptoacademyService.getTests().subscribe(data => {
            this.test = data.filter(test => test.id === testId)[0];

            this._cryptoacademyService.getTestsHistory().subscribe(data1 => {
                this.initTestStatus(data1);
            });
        });

        this.questionId = this.activatedRoute.snapshot.paramMap.get('questionId');
    }

    initTestStatus(data: TestHistory) {
        this._testStatusService.history = data;
        this._testStatusService.total = Object.keys(this.test.questions).length;
        this._testStatusService.passed = Object.keys(this._testStatusService.history.tests).length;
        this._testStatusService.passedPercent = (this._testStatusService.passed * 100) / this._testStatusService.total;

        this._testStatusService.getCorrectAndMistakesAmount(this._testStatusService.history);
    }
}
