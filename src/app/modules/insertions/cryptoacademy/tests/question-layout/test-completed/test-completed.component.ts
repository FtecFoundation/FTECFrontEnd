import { Component, OnInit } from '@angular/core';
import {TestStatusService} from '../../test-status/test-status.service';
import {CryptoacademyService} from '../../../../../../core/services/cryptoacademy.service';

@Component({
  selector: 'app-test-completed',
  templateUrl: './test-completed.component.html',
  styleUrls: ['../../../../insertions.scss', '../../../cryptoacademy.component.scss', '../../tests.component.scss']
})
export class TestCompletedComponent implements OnInit {
  grade: number = 0;

  constructor(public _testStatusService: TestStatusService, private _cryptoacademyService: CryptoacademyService) { }

  ngOnInit() {
    this._cryptoacademyService.getTestsHistory().subscribe(data => {
        this._testStatusService.getCorrectAndMistakesAmount(data);

        this.grade = (this._testStatusService.correct * 100) / this._testStatusService.total;
    });
  }

}
