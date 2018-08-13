import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
    @Output() valueToSend: EventEmitter<number> = new EventEmitter<number>();
    value: number = 0;

    constructor() {
    }

    normalizeValue(val: string): number {
        const value = Number.parseInt(val);
        return 0.45 * (value - 100) + 95;
    }

    emitValue(){
        this.valueToSend.emit(this.value);
    }

    ngOnInit() {
    }
}
