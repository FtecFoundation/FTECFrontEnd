import { Component, Input, OnInit } from '@angular/core';
import {ShowModalService} from '../../not-active/show-modal.service';
import {availableExchanges} from '../../insertions/arbitrage/available-exchanges';

@Component({
  selector: 'app-social',
  templateUrl: './my-exchanges.component.html',
  styleUrls: ['../../insertions/insertions.scss', './my-exchanges.component.scss']
})
export class MyExchangesComponent implements OnInit {
  exchanges: string[] = [];

  constructor(public _showModalService: ShowModalService) {
  }

  ngOnInit() {
    for (const exchange of availableExchanges) {
      this.exchanges.push(exchange.exchange);
    }
  }

    showModal() {
        this._showModalService.showModal = true;
    }

}