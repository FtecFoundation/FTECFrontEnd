import { Component, OnInit } from '@angular/core';
import {TestStatusService} from '../../test-status/test-status.service';
import {CryptoacademyService} from '../../../../../../core/services/cryptoacademy.service';
import {ActivatedRoute} from '@angular/router';
import {Test} from '../../../../../../core/models/test-cryptoacademy';

@Component({
  selector: 'app-test-completed',
  templateUrl: './test-completed.component.html',
  styleUrls: ['../../../../insertions.scss', '../../../cryptoacademy.component.scss', '../../tests.component.scss']
})
export class TestCompletedComponent implements OnInit {
  grade: number = 0;
  test: Test;

  constructor(public _testStatusService: TestStatusService,
              private _cryptoacademyService: CryptoacademyService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      const testId = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('testId'));
      this._cryptoacademyService.getTests().subscribe(data => {
          this.test = data.filter(test => test.id === testId)[0];
          this.test.total = Object.keys(this.test.questions).length;

          this._cryptoacademyService.getTestsHistory().subscribe(data1 => {
              this._testStatusService.getCorrectAndMistakesAmount(data1, testId);
              this.grade = (this._testStatusService.correct * 100) / this.test.total;
          });
      });
  }

}
