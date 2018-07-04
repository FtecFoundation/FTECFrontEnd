import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Test, TestHistory} from '../../../../../core/models/test-cryptoacademy';
import {CryptoacademyService} from '../../../../../core/services/cryptoacademy.service';

@Component({
    selector: 'app-test-blockchain',
    templateUrl: './question-layout.component.html',
    styleUrls: ['../../../insertions.scss', '../../cryptoacademy.component.scss', '../tests.component.scss']
})
export class QuestionLayoutComponent implements OnInit {
    test: Test;
    questionId: string;
    history: TestHistory;

    constructor(private activatedRoute: ActivatedRoute, private _cryptoacademyService: CryptoacademyService, private router: Router) {
        this.router.events.subscribe((e) => {
            this.questionId = this.activatedRoute.snapshot.paramMap.get('questionId');
        });
    }

    ngOnInit() {
        const testId = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('testId'));
        this._cryptoacademyService.getTests().subscribe(data => {
            this.test = data.filter(test => test.id === testId)[0];
            console.log(this.test);

            this._cryptoacademyService.getTestsHistory().subscribe(data1 => {
                this.history = data1;
            });
        });
        this.questionId = this.activatedRoute.snapshot.paramMap.get('questionId');
    }

}
