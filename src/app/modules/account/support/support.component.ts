import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../../core/services/image.service';
import {ShowModalService} from '../../not-active/show-modal.service';
import {SupportService} from "./support.service";
import {CurrentUserService} from "../../../core/services/current-user.service";
import {NotifyService} from "../../../core/notify/notify.service";
import {Notify} from "../../../core/notify/notifications";

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
    @ViewChild('uploader') inputImage: ElementRef;
    data: any = {email: '', message: ''};
    submitted: boolean = false;

    constructor(private supportService: SupportService, public currentUserService: CurrentUserService, private notifyService: NotifyService) {
        this.data.email = this.currentUserService.user.email;
    }

    ngOnInit() {
    }

    submitForm(form: any) {
        this.submitted = true;
        console.log(form);
        if (form.valid) this.supportService.sendSimpleRequest(form.value).subscribe(data => {
            this.notifyService.addNotification(new Notify(this.notifyService.lastId, 'Success!',
                'Your request has been sent', 'success'))
        });
    }
}
