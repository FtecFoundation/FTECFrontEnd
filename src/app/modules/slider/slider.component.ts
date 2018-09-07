import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
    @Output() valueToSend: EventEmitter<number> = new EventEmitter<number>();
    value: string = ''+0;
    @Input() postfix: string = '%';
    @Input() max: number = 100;
    @Input() min: number = -100;

    constructor() {
    }

    normalizeValue(val: string): number {
        const value = Number.parseInt(val);
        return (90 * ((value - this.min) / (this.max - this.min)) + 5);
        // return 0.45 * (value - 100) + 95;
    }

    emitValue(){
        this.valueToSend.emit(Number.parseInt(this.value));
    }

    ngOnInit() {
    }
}
