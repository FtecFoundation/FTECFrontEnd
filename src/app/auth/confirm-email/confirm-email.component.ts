import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorsService} from '../../core/services/errors-handling/errors.service';

@Component({
    selector: 'app-confirm-email',
    templateUrl: './confirm-email.component.html',
    styleUrls: ['../auth.scss']
})
export class ConfirmEmailComponent implements OnInit {

    message = '';

    constructor(private _accountService: AccountService,
                private activatedRoute: ActivatedRoute,
                private _errorsService: ErrorsService) {
    }

    ngOnInit() {
        this._accountService.confirmEmail(this.activatedRoute.snapshot.params['hash']).subscribe(() => {
            this.message = 'Your email was confirmed!';
        }, error1 => {
            this.message = this._errorsService.parseResponseMessage(error1);
        });
    }

}
