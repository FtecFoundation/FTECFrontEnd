import { Component, OnInit} from '@angular/core';
import {NotifyService} from "./notify.service";
import {animate, animateChild, query, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-notify',
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.scss'],
    animations: [
        trigger('notification', [
            transition('void => *', [
                style({marginRight: '-100%', opacity: 0}),
                animate('500ms ease-out')
            ]),
            transition('* => void', [
                animate('700ms ease-out', style({marginRight: '-100%', opacity: 0}))
            ])
        ]),
        trigger('container', [
            transition(':enter, :leave', [
                query('@*', animateChild())
            ])
        ])
    ]
})
export class NotifyComponent implements OnInit {

    constructor(public _notifyService: NotifyService) { }

    ngOnInit() {
    }



}
