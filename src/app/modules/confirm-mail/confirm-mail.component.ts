import { Component, OnInit } from '@angular/core';
import {ShowModalService} from '../not-active/show-modal.service';
import {AccountService} from '../../core/services/account.service';

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


  message: string = messages.default;

  constructor(private _accountService: AccountService) { }

  ngOnInit() {
  }

  resendEmail() {
      this._accountService.resendEmail().subscribe(() => {
          this.message = messages.successful;
      }, error1 => {
          this.message = messages.error;
      });
  }

}
