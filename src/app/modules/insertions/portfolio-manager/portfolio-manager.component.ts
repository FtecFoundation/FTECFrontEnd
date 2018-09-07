import { Component, Input, OnInit } from '@angular/core';
import { AvailableExchanges } from '../arbitrage/available-exchanges';
import {Pair} from "../../../core/models/pair";


@Component({
  selector: 'app-social',
  templateUrl: './portfolio-manager.component.html',
  styleUrls: ['../insertions.scss', './portfolio-manager.component.scss', '../order-manager/order-manager.component.scss',]
})
export class PortfolioManagerComponent implements OnInit {
  profitPercent: number = 0;
  pairs: Pair[];

  exchanges = AvailableExchanges;

  constructor() {
  }

  ngOnInit() {
  }

    getProfitPercent(value: number) {
        this.profitPercent = value;
    }

}
