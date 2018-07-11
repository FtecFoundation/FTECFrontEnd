import { Component, Input, OnInit } from '@angular/core';
import { availableExchanges } from '../arbitrage/available-exchanges';


@Component({
  selector: 'app-social',
  templateUrl: './portfolio-manager.component.html',
  styleUrls: ['../insertions.scss', './portfolio-manager.component.scss']
})
export class PortfolioManagerComponent implements OnInit {

  exchanges = availableExchanges;

  constructor() {
  }

  ngOnInit() {
  }

}
