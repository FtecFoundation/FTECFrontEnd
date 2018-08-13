import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { routerAnimation } from '../dropdown/dropdown.animation';
import { transition, trigger, useAnimation } from '@angular/animations';
import {Pair} from "../../core/models/pair";

@Component({
    selector: 'app-filter-dropdown',
    templateUrl: './filter-dropdown.component.html',
    styleUrls: ['./filter-dropdown.component.scss'],
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
            useExisting: forwardRef(() => FilterDropdownComponent),
            multi: true
        }
    ]
})
export class FilterDropdownComponent<T> implements OnInit, OnChanges {
    @Input() items: T[];

    @Input() label: string;

    @Input() keyName: string = null;


    @Output() selected: EventEmitter<string> = new EventEmitter<string>();
    @Output() selectedPair: EventEmitter<Pair> = new EventEmitter<Pair>();

    currentPair: Pair;

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
    }

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.items || this.items.length === 0) {
            this._active = null;
        }

    }

    refreshResults(filter: string) {
        this.opened = true;
        this.selected.emit(filter);
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

    selectPair(value: Pair): void {
        this.currentPair = value;
        this.selectedPair.emit(value);
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
