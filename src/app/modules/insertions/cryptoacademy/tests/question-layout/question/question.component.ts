import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['../../../cryptoacademy.component.scss']
})
export class QuestionComponent implements OnInit {
    @Input() testId: string;
    @Input() questionId: string;

    constructor() {
    }

    ngOnInit() {
    }

}
