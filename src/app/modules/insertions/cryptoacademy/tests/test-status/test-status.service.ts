import {Injectable} from '@angular/core';

@Injectable()
export class TestStatusService {
    passed = 0;
    total = 0;
    correct = 0;
    mistakes = 0;

    constructor() {
    }
}
