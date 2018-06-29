import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test-blockchain',
  templateUrl: './question-layout.component.html',
  styleUrls: ['../../../insertions.scss', '../../cryptoacademy.component.scss', '../tests.component.scss']
})
export class QuestionLayoutComponent implements OnInit {
  testId: string;
  questionId: string;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.testId = this.activatedRoute.snapshot.paramMap.get('testId');
      this.questionId = this.activatedRoute.snapshot.paramMap.get('questionId');
  }

}
