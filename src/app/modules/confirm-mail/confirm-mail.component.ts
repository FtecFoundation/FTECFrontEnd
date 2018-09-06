import { Component, OnInit } from '@angular/core';
import {ShowModalService} from '../not-active/show-modal.service';
import {AccountService} from '../../core/services/account.service';
import {NotifyService} from "../../core/notify/notify.service";
import {Notify, notifyTypes} from "../../core/notify/notifications";

export const messages: any = {
    default: 'Your email has not been confirmed yet. Please confirm email or your account will be deleted ' +
    'in two days after registration.',
    successful: 'Your confirmation has been resent',
    error: 'Something went wrong'
};

@Component({
  selector: 'app-confirm-mail',
  templateUrl: './confirm-mail.component.html',
  styleUrls: ['./confirm-mail.component.scss']
})

export class ConfirmMailComponent implements OnInit {

  constructor(private _accountService: AccountService, private _notifyService: NotifyService) { }

  ngOnInit() {
  }

  resendEmail() {
      this._accountService.resendEmail().subscribe(() => {
          this._notifyService.addNotification(new Notify(this._notifyService.lastId,'Success!', 'Your confirmation has been resent', notifyTypes.success));
      });
  }

}
