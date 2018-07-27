import {Component, Input, OnInit} from '@angular/core';
import {ShowModalService} from '../../not-active/show-modal.service';
import {AvailableExchanges, Stock} from '../../insertions/arbitrage/available-exchanges';
import {MyExchangesService} from './my-exchanges.service';

@Component({
  selector: 'app-social',
  templateUrl: './my-exchanges.component.html',
  styleUrls: ['../../insertions/insertions.scss', './my-exchanges.component.scss']
})
export class MyExchangesComponent implements OnInit {
  exchanges: Stock[] = [];

  privateKey: string;
  publicKey: string;
  chosenStock: Stock;

  constructor(public _showModalService: ShowModalService, private _myExchangesService: MyExchangesService) {
  }

  ngOnInit() {
    this.exchanges = AvailableExchanges.availibleStocks;
    this._myExchangesService.getKeys().subscribe();
  }

  chooseStock(chosen: Stock) {
    this.chosenStock = chosen;
  }

  setKeys() {
      this._myExchangesService.saveKey(this.privateKey, this.publicKey, this.chosenStock)
          .subscribe(val => {

          });
  }

}
