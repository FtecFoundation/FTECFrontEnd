import { Component, Input, OnInit } from '@angular/core';
import { ShowModalService } from '../../not-active/show-modal.service';
import { AvailableExchanges, Stock } from '../../insertions/arbitrage/available-exchanges';
import { MyExchangesService } from './my-exchanges.service';
import { CurrentUserService } from '../../../core/services/current-user.service';
import { ExchangeKeys } from '../../../core/models/user';
import {FaqComponent} from '../../faq/faq.component';

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

  goToFaq=FaqComponent.goToFaq;

  public chosenKeys = [];

  constructor(public _showModalService: ShowModalService,
              private _myExchangesService: MyExchangesService,
              public _currentUserService: CurrentUserService) {
  }

  ngOnInit() {
    this.exchanges = AvailableExchanges.availableStocks;
    this._currentUserService.getStockKeys(true).subscribe(value => this.chosenKeys = value);
  }

  chooseStock(chosen: Stock) {
    this.chosenStock = chosen;
  }

  setKeys() {
    this._myExchangesService.saveKey(this.privateKey, this.publicKey, this.chosenStock)
      .subscribe(val => {
        if (val.status === 0) {
          this._currentUserService
          .addStockKey(this.privateKey.substr(0, 4), this.publicKey.substr(0, 4), this.chosenStock.nameToSend);
        }
      });
  }

  deleteKeys(key: ExchangeKeys) {
    this._myExchangesService.deleteKey(key)
      .subscribe(val => {
        if (val.status === 0) {
          this._currentUserService
          .removeStockKey(key);
        }
      });
  }
}
