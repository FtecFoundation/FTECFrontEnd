import { Component, OnInit } from '@angular/core';
import {ShowModalService} from '../not-active/show-modal.service';
import { errorMessages } from '../../core/services/errors.service';

@Component({
  selector: 'app-confirm-mail',
  templateUrl: './confirm-mail.component.html',
  styleUrls: ['./confirm-mail.component.scss']
})
export class ConfirmMailComponent implements OnInit {

  // showModal = false;
  messages: any = {
    default: "Your email has not been confirmed yet. Please confirm email or your account will be deleted " +
     "in two days after registration.",
    successful: "Your confirmation has been resent",
    error: "Something went wrong"
  }

// message: string = 

  constructor(private _showModalService: ShowModalService) { }

  ngOnInit() {
  }

  showModal() {
    this._showModalService.showModal = true;
  }

}
