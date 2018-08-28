import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Question, QuestionsContainer, Test, TestHistory} from '../../../../../../core/models/test-cryptoacademy';
import {CryptoacademyService} from '../../../cryptoacademy.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TestStatusService} from '../../test-status/test-status.service';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['../../../cryptoacademy.component.scss']
})
export class QuestionComponent implements OnInit, OnChanges {
    @Input() questions: QuestionsContainer;
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
        this.question = this.questions[this.questionId];
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
        return (this.history.tests[this.test.id + '_' + this.questionId] &&
            this.history.tests[this.test.id + '_' + this.questionId].selectedAnswer !== -1);
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
        } else if (this.response && ((this._testStatusService.passed - 1) == this._testStatusService.total)) {
            this.router.navigate(['/modules/cryptoacademy/completed', this.test.id]);
        } else if (!this.response && ((this._testStatusService.passed - 1) < this._testStatusService.total)) {
            this.router.navigate(['/modules/cryptoacademy/test', this.test.id, (++this.questionId)]);
        } else {
            this._cryptoacademyService.getTestsHistory().subscribe(data => {
                for (let i = 1; i < this.test.totalQuestions; i++) {
                    if (!data.tests[this.test.id + '_' + i]) {
                        this.test.lastQuestion = i;
                        break;
                    }
                }
                this.router.navigate(['/modules/cryptoacademy/test', this.test.id, this.test.lastQuestion]);
            });
        }
    }

}
