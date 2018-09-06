import { Component, OnInit} from '@angular/core';
import {NotifyService} from "./notify.service";
import {animate, animateChild, query, state, style, transition, trigger} from "@angular/animations";
import set = Reflect.set;
import {Notify} from "./notifications";

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
                query('@*', animateChild(), { optional: true })
            ])
        ])
    ]
})
export class NotifyComponent implements OnInit {

    constructor(public _notifyService: NotifyService) { }

    ngOnInit() {
    }

    hideAll() {
        const not = this._notifyService.notifications;
        for (let i = 0; i <= this._notifyService.notifications.length; i++) {
            setTimeout(function(x) { return function() { not.shift() }; }(i), 200*i);
            // 1 2 3 4 5
        }
    }

    hideNotif(id: number) {
        delete this._notifyService.notifications[id];
    }
}
