import { Component, OnInit} from '@angular/core';
import {NotifyService} from "./notify.service";
import {animate, animateChild, query, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-notify',
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

    constructor(public _notifyService: NotifyService) { }

    ngOnInit() {
    }



}
