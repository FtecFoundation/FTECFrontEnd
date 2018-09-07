import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Question, QuestionsContainer, Test, TestHistory} from '../../../../../../core/models/test-cryptoacademy';
import {CryptoacademyService} from '../../../cryptoacademy.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TestStatusService} from '../../test-status/test-status.service';

export abstract class QuestionComponent implements OnInit, OnChanges {
    @Input() questions: QuestionsContainer;
    @Input() test: Test;
    @Input() questionId: number;
    @Input() history: TestHistory;

    question: Question;
    selected: number;
    response: any;
    answerImg: string;

    constructor(protected _cryptoacademyService: CryptoacademyService,
                protected router: Router,
                protected _testStatusService: TestStatusService) {
    }

    ngOnInit() {
        this.initializeQuestion();
    }

    ngOnChanges() {
        this.initializeQuestion();
    }

    initializeQuestion() {
        this.question = this.questions[this.questionId];
        if (this.checkIfAnswered()) {
            this.response = this._testStatusService.history.tests[this.test.id + '_' + this.questionId];
        } else {
            this.response = null;
        }
        this.updatePercent();
    }

    abstract chooseAnswer(answerId: number);

    checkIfAnswered(): boolean {
        return (this.history.tests[this.test.id + '_' + this.questionId] &&
            this.history.tests[this.test.id + '_' + this.questionId].selectedAnswer != -1);
    }

    updatePercent() {
        this._testStatusService.passedPercent = (this._testStatusService.passed * 100) / this._testStatusService.total;
    }

    prepareData() {
        return {'testId': this.test.id, 'question': this.questionId, 'selectedAnswer': this.selected};
    }

    skip() {
        if (!this.response) {
            if (this.questionId < this._testStatusService.total) {
                this.router.navigate(['/modules/cryptoacademy/test', this.test.id, (++this.questionId)]);
            }
            else if (this.questionId == this._testStatusService.total) {
                this.goToLastUnanswered();
            }
        }
    }

    goToNext() {
        if (this.response) {
            if (this._testStatusService.passed < this._testStatusService.total) {
                if (this.questionId == this._testStatusService.total) this.goToLastUnanswered();

                this.router.navigate(['/modules/cryptoacademy/test', this.test.id, (++this.questionId)]);
                this.updatePercent();
            }
            if (this._testStatusService.passed === this._testStatusService.total) {
                this.router.navigate(['/modules/cryptoacademy/completed', this.test.id]);
            }
        }
    }

    goToLastUnanswered(){
        this._cryptoacademyService.getTestsHistory().subscribe(data => {
            console.log(data);
            for (let i = 1; i < this.test.totalQuestions; i++) {
                if (!data.tests[this.test.id + '_' + i] || data.tests[this.test.id + '_' + i].selectedAnswer == -1) {
                    this.test.lastQuestion = i;
                    break;
                }
            }
            this.router.navigate(['/modules/cryptoacademy/test', this.test.id, this.test.lastQuestion]);
        });
    }

}
