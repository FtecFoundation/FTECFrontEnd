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
    selected: number;
    response: any;

    constructor(private _cryptoacademyService: CryptoacademyService,
                private router: Router,
                private _testStatusService: TestStatusService) {
    }

    ngOnInit() {
        this.initializeQuestion();
    }

    ngOnChanges() {
        this.initializeQuestion();
    }

    initializeQuestion() {
        this.question = this.test.questions[this.questionId];
        if (this.checkIfAnswered()) {
            this.response = this._testStatusService.history.tests[this.test.id + '_' + this.questionId];
        } else {
            this.response = null;
        }
        this.updatePercent();
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

                    this._testStatusService.history.tests[this.test.id + '_' + this.questionId].correctAnswer = this.response.correctAnswer;
                    this._testStatusService.history.tests[this.test.id + '_' + this.questionId].selectedAnstwer = this.selected;
            });
        }
    }

    checkIfAnswered(): boolean {
        return !!this.history.tests[this.test.id + '_' + this.questionId];
    }

    updatePercent() {
        this._testStatusService.passedPercent = (this._testStatusService.passed * 100) / this._testStatusService.total;
    }

    prepareData() {
        return {'testId': this.test.id, 'question': this.questionId, 'selectedAnswer': this.selected};
    }

    goToNext() {
        if (this.response && (this.questionId < this._testStatusService.total)) {
            this.router.navigate(['/modules/cryptoacademy/test', this.test.id, (++this.questionId)]);
            this._testStatusService.passed++;
            this.updatePercent();
        } else if (this.response && (this.questionId == this._testStatusService.total)) {
            this.router.navigate(['/modules/cryptoacademy/test/completed']);
        } else if (!this.response && (this.questionId < this._testStatusService.total)) {
            this.router.navigate(['/modules/cryptoacademy/test', this.test.id, (++this.questionId)]);
        } else {
            this._cryptoacademyService.getTestsHistory().subscribe(data => {
                const questions = Object.keys(this.test.questions);
                for (const question of questions) {
                    if (!data.tests[this.test.id + '_' + question]) {
                        this.test.lastQuestion = Number.parseInt(question);
                        break;
                    }
                }
                this.router.navigate(['/modules/cryptoacademy/test', this.test.id, this.test.lastQuestion]);
            });
        }
    }

}
