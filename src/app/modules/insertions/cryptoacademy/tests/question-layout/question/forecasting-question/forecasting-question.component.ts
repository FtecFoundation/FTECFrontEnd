import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {QuestionComponent} from "../question.component";
import {CryptoacademyService} from "../../../../cryptoacademy.service";
import {Router} from "@angular/router";
import {TestStatusService} from "../../../test-status/test-status.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-forecasting-question',
    templateUrl: '../question.component.html',
    styleUrls: ['../../../../cryptoacademy.component.scss'],
    animations: [
        trigger('image', [
            state('*', style({transform: 'translateX(0)', opacity: 1})),
            transition('void => *', [
                style({opacity: 0}),
                animate('400ms ease')
            ])
        ])]
})
export class ForecastingQuestionComponent extends QuestionComponent{
    @ViewChild('image') image: ElementRef;

    constructor(_cryptoacademyService: CryptoacademyService,
                router: Router,
                _testStatusService: TestStatusService) {
        super(_cryptoacademyService, router,_testStatusService);
    }

    chooseAnswer(answerId: number) {
        if (!this.response) {
            this.selected = answerId;
            this._cryptoacademyService.answer(this.prepareData()).subscribe(data => {
                this.response = data;
                this._testStatusService.passed++;

                if (this.response.correctAnswer.correct == this.selected) {
                    this._testStatusService.correct++;
                } else {
                    this._testStatusService.mistakes++;
                }

                this._testStatusService.history.tests[this.test.id + '_' + this.questionId].correctAnswer.correct = this.response.correctAnswer.correct;
                this._testStatusService.history.tests[this.test.id + '_' + this.questionId].selectedAnstwer = this.selected;

                this.image.nativeElement.src = '/api/crypto/images/' + this.test.id + '/' + this.response.correctAnswer.image;
            });
        }
    }

}
