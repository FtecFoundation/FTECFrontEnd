import {Injectable} from '@angular/core';
import {TestHistory} from '../../../../../core/models/test-cryptoacademy';

@Injectable()
export class TestStatusService {
    passed = 0;
    total = 0;
    correct = 0;
    mistakes = 0;
    passedPercent = 0;
    history: TestHistory;

    constructor() {
    }

    getCorrectAndMistakesAmount(history: TestHistory) {
        this.correct = 0;
        this.mistakes = 0;

        for (const answer of Object.keys(history.tests)) {
            if (history.tests[answer].selectedAnswer === history.tests[answer].correctAnswer) {
                this.correct++;
            } else {
                this.mistakes++;
            }
        }
    }
}
