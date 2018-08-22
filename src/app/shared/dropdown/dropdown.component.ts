import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { routerAnimation } from './dropdown.animation';
import { transition, trigger, useAnimation } from '@angular/animations';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    animations: [
        trigger('routerAnimations', [
            transition('* <=> *', [
                useAnimation(routerAnimation)
            ])
        ])
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownComponent),
            multi: true
        }
    ]
})
export class DropdownComponent<T> implements OnInit, OnChanges {
    @Input() items: T[];

    @Input() label: string;

    @Input() keyName: string = null;


    @Output() selected: EventEmitter<T> = new EventEmitter<T>();

    _active: T;

    opened: boolean;

    propagateChange = (_: any) => { };

    get active(): T {
        return this._active;
    }

    @Input('active')
    set active(value: T) {
        this._active = value;
        this.propagateChange(this.active);
        this.selected.emit(this.active);
    }

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.items || this.items.length === 0) {
            this._active = null;
        }

    }

    closeDropdown() {
        this.opened = false;
    }

    writeValue(value: any): void {
        this.active = value;
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
    }


    select(value: T): void {
        this.active = value;
        this.opened = false;
    }

    @Input()
    set value(value: T) {
        this._active = value;
    }

    reset(): void {
        this._active = null;
    }

}
