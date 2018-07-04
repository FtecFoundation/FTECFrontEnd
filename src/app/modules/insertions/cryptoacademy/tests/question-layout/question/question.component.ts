import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Question, Test, TestHistory} from '../../../../../../core/models/test-cryptoacademy';
import {CryptoacademyService} from '../../../../../../core/services/cryptoacademy.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TestStatusService} from '../../test-status/test-status.service';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['../../../cryptoacademy.component.scss']
})
export class QuestionComponent implements OnInit, OnChanges {
    @Input() test: Test;
    @Input() questionId: number;
    @Input() history: TestHistory;

    question: Question;
    answered: boolean;
    selected: number;
    response: any;

    constructor(private _cryptoacademyService: CryptoacademyService,
                private router: Router,
                private _testStatusService: TestStatusService) {
    }

    ngOnInit() {
        this.question = this.test.questions[this.questionId];
        if (this.checkIfAnswered()) {
            this.response = this.history.tests[this.test.id + '_' + this.questionId];
            this.selected = this.response.selectedAnswer;
            console.log(this.response);
        } else {
            this.response = null;
        }
    }

    ngOnChanges() {
        this.question = this.test.questions[this.questionId];
        console.log(this.checkIfAnswered());
    }

    chooseAnswer(answerId: number) {
        if (!this.response) {
            this.selected = answerId;
            this._cryptoacademyService.answer(this.prepareData()).subscribe(data => {
                this.response = data;

                if (this.response.correctAnswer === this.selected) {
                    this._testStatusService.correct++;
                } else {
                    this._testStatusService.mistakes++;
                }
            });
        }
    }

    checkIfAnswered(): boolean {
        return this.history.tests[this.test.id + '_' + this.questionId];
    }

    prepareData() {
        return {'testId': this.test.id, 'question': this.questionId, 'selectedAnswer': this.selected};
    }

    goToNext() {
        this.router.navigate(['/modules/cryptoacademy/test', this.test.id, (++this.questionId)]);
    }

}
