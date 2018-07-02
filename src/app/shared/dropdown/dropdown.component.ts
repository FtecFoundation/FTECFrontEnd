import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownComponent),
            multi: true
        }
    ]
})
export class DropdownComponent implements OnInit, OnChanges {
    @Input() items: string[];

    @Input() label: string;


    @Output() selected: EventEmitter<string> = new EventEmitter<string>();

    _active: string;

    opened: boolean;

    propagateChange = (_: any) => {};

    get active(): string {
        return this._active;
    }

    @Input('active')
    set active(value: string) {
        this._active = value;
        this.propagateChange(this.active);
        this.selected.emit(this.active);
    }

    constructor() {}

    ngOnInit(): void {

        // if(!this.active && this.items){
        //     this.active = this.items[0];
        // }


    }

    ngOnChanges(changes: SimpleChanges): void {

        if (!this.items || this.items.length === 0) {
            this._active = null;
        }

    }

    writeValue(value: any): void {

        this.active = value;
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
    }


    select(value: string): void {
        this.active = value;
        this.opened = false;

    }

    @Input()
    set value(value: string) {
        this._active = value;
    }

    reset(): void {
        this._active = null;
    }

}
