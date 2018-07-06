import {Component, Input, OnInit} from '@angular/core';
import {Test, TestHistory} from '../../../../../core/models/test-cryptoacademy';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {TestStatusService} from './test-status.service';

@Component({
    selector: 'app-test-status',
    templateUrl: './test-status.component.html',
    styleUrls: ['./test-status.component.scss', '../../cryptoacademy.component.scss']
})
export class TestStatusComponent implements OnInit {
    @Input() test: Test;
    @Input() history: TestHistory;
    @Input() questionId: string;

    constructor(public _testStatusService: TestStatusService) {
    }

    ngOnInit() {
        this._testStatusService.mistakes = 0;
        this._testStatusService.correct = 0;
        this._testStatusService.total = Object.keys(this.test.questions).length;
        this._testStatusService.passed = Object.keys(this.history.tests).length;

        this.getCorrectAndMistakesAmount();
    }

    getCorrectAndMistakesAmount() {
        for (const answer of Object.keys(this.history.tests)) {
            if (this.history.tests[answer].selectedAnswer === this.history.tests[answer].correctAnswer) {
                this._testStatusService.correct++;
            } else {
                this._testStatusService.mistakes++;
            }
        }
    }

}
