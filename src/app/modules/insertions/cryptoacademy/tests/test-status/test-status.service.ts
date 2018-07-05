import {Injectable} from '@angular/core';
import {TestHistory} from '../../../../../core/models/test-cryptoacademy';

@Injectable()
export class TestStatusService {
    passed = 0;
    total = 0;
    correct = 0;
    mistakes = 0;
    history: TestHistory;

    constructor() {
    }
}
