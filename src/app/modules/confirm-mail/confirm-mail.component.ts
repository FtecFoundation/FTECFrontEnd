import { Component, OnInit } from '@angular/core';
import {ShowModalService} from '../not-active/show-modal.service';

@Component({
  selector: 'app-confirm-mail',
  templateUrl: './confirm-mail.component.html',
  styleUrls: ['./confirm-mail.component.scss']
})
export class ConfirmMailComponent implements OnInit {

  constructor(private _showModalService: ShowModalService) { }

  ngOnInit() {
  }

  showModal() {
    this._showModalService.showModal = true;
  }

}
