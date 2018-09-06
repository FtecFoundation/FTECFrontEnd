import { Component, OnInit } from '@angular/core';
import {QuestionComponent} from "../question.component";
import {CryptoacademyService} from "../../../../cryptoacademy.service";
import {Router} from "@angular/router";
import {TestStatusService} from "../../../test-status/test-status.service";

@Component({
  selector: 'app-ordinary-question',
  templateUrl: '../question.component.html',
  styleUrls: ['../../../../cryptoacademy.component.scss']
})
export class OrdinaryQuestionComponent extends QuestionComponent{

  constructor(_cryptoacademyService: CryptoacademyService,
              router: Router,
              _testStatusService: TestStatusService) {
    super(_cryptoacademyService, router,_testStatusService);
    console.log(this.response);
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
            });
        }
    }

}
