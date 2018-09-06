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

    getCorrectAndMistakesAmount(history: TestHistory, test: number) {
        this.correct = 0;
        this.mistakes = 0;
        for (const answer of Object.keys(history.tests)) {
            if (this.fromTest(answer, test) && history.tests[answer].selectedAnswer != -1) {
                if (history.tests[answer].selectedAnswer === history.tests[answer].correctAnswer) {
                    this.correct++;
                } else {
                    this.mistakes++;
                }
            }
        }
    }

    getPassedAmount(history: TestHistory, test: number) {
        this.passed = 0;
        for (const answer of Object.keys(history.tests)) {
            if (this.fromTest(answer, test) && history.tests[answer].selectedAnswer != -1) {
                this.passed++;
            }
        }
    }

    fromTest(history: string, test: number): boolean {
        return Number.parseInt(history.substring(0, history.indexOf('_'))) === test;
    }
}
