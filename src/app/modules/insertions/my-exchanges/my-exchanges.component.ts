import { Component, Input, OnInit } from '@angular/core';
import {ShowModalService} from '../../not-active/show-modal.service';

@Component({
  selector: 'app-social',
  templateUrl: './my-exchanges.component.html',
  styleUrls: ['../insertions.scss', './my-exchanges.component.scss']
})
export class MyExchangesComponent implements OnInit {

  constructor(public _showModalService: ShowModalService) {
  }

  ngOnInit() {
  }

    showModal() {
        this._showModalService.showModal = true;
    }

}
