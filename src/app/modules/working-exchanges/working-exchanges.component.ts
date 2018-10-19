import { Component, OnInit } from '@angular/core';
import {ExchangesSupport} from "./exchanges-support";

@Component({
  selector: 'app-working-exchanges',
  templateUrl: './working-exchanges.component.html',
  styleUrls: ['./working-exchanges.component.scss']
})
export class WorkingExchangesComponent implements OnInit {
  exchangesSupport = ExchangesSupport;

    constructor() { }

  ngOnInit() {
  }

  getKeys(obj: any): any {
      return Object.keys(obj);
  }

}
