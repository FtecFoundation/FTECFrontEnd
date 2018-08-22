import { Component, OnInit } from '@angular/core';
import {TestStatusService} from '../../test-status/test-status.service';
import {CryptoacademyService} from '../../../cryptoacademy.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Test} from '../../../../../../core/models/test-cryptoacademy';

@Component({
  selector: 'app-test-completed',
  templateUrl: './test-completed.component.html',
  styleUrls: ['../../../../insertions.scss', '../../../cryptoacademy.component.scss', '../../tests.component.scss']
})
export class TestCompletedComponent implements OnInit {
  grade = 0;
  test: Test;

  constructor(public _testStatusService: TestStatusService,
              private _cryptoacademyService: CryptoacademyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
      const testId = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('testId'));
      this._cryptoacademyService.getTests().subscribe(data => {
          this.test = data.filter(test => test.id === testId)[0];

          this._cryptoacademyService.getTestsHistory().subscribe(data1 => {
              this._testStatusService.getCorrectAndMistakesAmount(data1, testId);
              this.grade = (this._testStatusService.correct * 100) / this.test.totalQuestions;
          });
      });
  }

  resetTest() {
      this._cryptoacademyService.resetTest(this.test.id).subscribe(() => {
         this.router.navigate(['/modules/cryptoacademy']);
      });
  }

}
