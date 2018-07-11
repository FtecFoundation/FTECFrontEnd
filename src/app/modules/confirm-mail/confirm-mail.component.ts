import { Component, OnInit } from '@angular/core';
import {ShowModalService} from '../not-active/show-modal.service';

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

  constructor(private _showModalService: ShowModalService) { }

  ngOnInit() {
  }

  showModal() {
    this._showModalService.showModal = true;
  }

}
