import {Injectable, Input} from '@angular/core';
import {Notify, notifyTypes} from "./notifications";

@Injectable()
export class NotifyService {
    lastId: number = 0;

    notifications: Notify[] = [];

    constructor() { }

    addNotification(newNotification: Notify) {
        const array = this.notifications;
        array.push(newNotification);
        this.lastId++;
        setTimeout(function () {
            array.shift();
        }, 10000)
     }
}
