import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-set-new-password',
    templateUrl: './set-new-password.component.html',
    styleUrls: ['../auth.scss']
})
export class SetNewPasswordComponent implements OnInit {

    submitted = false;
    data: string;

    constructor(private _accountService: AccountService) { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
    }
}
