import {Component, Input, OnInit} from '@angular/core';
import {QuestionsContainer, Test, TestHistory} from '../../../../../core/models/test-cryptoacademy';
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
        this._testStatusService.total = this.test.totalQuestions;
        this._testStatusService.getPassedAmount(this.history, this.test.id);

        this._testStatusService.getCorrectAndMistakesAmount(this.history, this.test.id);
    }

}
