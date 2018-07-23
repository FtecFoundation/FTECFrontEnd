import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AccountService} from '../../core/services/account.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../auth.scss']
})
export class ForgotPasswordComponent implements OnInit {

  submitted = false;
  data: string;

  constructor(private _accountService: AccountService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(form.value);
      if (form.valid) {
        this._accountService.restorePassword(form.value).subscribe(() => {
        });
      }
  }
}
