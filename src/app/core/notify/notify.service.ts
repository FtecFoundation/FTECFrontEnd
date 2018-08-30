import {Injectable, Input} from '@angular/core';
import {Notify, notifyTypes} from "./notifications";

@Injectable()
export class NotifyService {

    notifications: Notify[] = [];

    constructor() { }

    addNotification(newNotification: Notify) {
        const array = this.notifications;
        array.push(newNotification);
        setTimeout(function () {
            array.shift();
        }, 10000)
    }
}
