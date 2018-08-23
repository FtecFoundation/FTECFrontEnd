import { Injectable } from '@angular/core';
import {ExchangesService} from "../exchanges/exchanges.service";
import {Pair} from "../../models/pair";
import {Stock} from "../../../modules/insertions/arbitrage/available-exchanges";

@Injectable()
export class PairsFilterService {
  allPairs: Pair[];
  resultPairs: Pair[] = [];
  selectedPair: Pair;
  exchangesList: Stock[] = [];

  constructor(private exchangesService: ExchangesService) { }

  fillAllPairs() {
      this.allPairs = [];
      for (const exchange of Object.keys(this.exchangesService.exchanges)) {
          this.exchangesService.exchanges[exchange].getPairs().subscribe(data => {
              for (const pair of data) this.allPairs.push(pair);
          });
      }
  }

    filterPairs(key: string) {
        this.resultPairs = this.allPairs.filter(pair => (pair.symbol + '/' + pair.base).includes(key.toUpperCase()));
    }

    onPairTyping(pair: string) {
        this.filterPairs(pair);
    }

    selectPair(pair: Pair) {
        this.selectedPair = pair;
        for (const p of this.resultPairs) {
            if (this.selectedPair.base === p.base && this.selectedPair.symbol === p.symbol) this.exchangesList.push(p.exchange);
        }
    }

}
