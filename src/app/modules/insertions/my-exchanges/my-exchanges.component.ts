import { Component, Input, OnInit } from '@angular/core';
import {ShowModalService} from '../../not-active/show-modal.service';
import {availableExchanges} from '../arbitrage/available-exchanges';

@Component({
  selector: 'app-social',
  templateUrl: './my-exchanges.component.html',
  styleUrls: ['../insertions.scss', './my-exchanges.component.scss']
})
export class MyExchangesComponent implements OnInit {
  exchanges = availableExchanges;

  constructor(public _showModalService: ShowModalService) {
  }

  ngOnInit() {
  }

    showModal() {
        this._showModalService.showModal = true;
    }

}
