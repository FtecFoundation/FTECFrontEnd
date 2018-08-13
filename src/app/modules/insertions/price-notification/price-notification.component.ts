import {Component, Input, OnInit} from '@angular/core';
import {priceNotification} from './price-notification';
import {AvailableExchanges} from '../arbitrage/available-exchanges';
import {BinanceService} from "../../../core/services/exchanges/binance.service";
import {EtherscanService} from "../../../core/services/etherscan.service";
import {CurrentUserService} from "../../../core/services/current-user.service";
import {HitBTCService} from "../../../core/services/exchanges/hitbtc.service";
import {BittrexService} from "../../../core/services/exchanges/bittrex.service";
import {Pair} from "../../../core/models/pair";
import {ExchangeService} from "../../../core/services/exchanges/exchange.service";
import {ExchangesService} from "../../../core/services/exchanges/exchanges.service";

@Component({
    selector: 'app-social',
    templateUrl: './price-notification.component.html',
    styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', '../../account/my-exchanges/my-exchanges.component.scss', './price-notification.component.scss']
})
export class PriceNotificationComponent implements OnInit {

    exchanges = AvailableExchanges.availableStocks;
    price = priceNotification;
    allPairs: Pair[] = [];
    pairs: Pair[] = [];
    profitPercent: number = 0;
    selectedPair: Pair;
    pairPrice: number;
    pairExchange: string = '';

    constructor(private currentUser: CurrentUserService, private exchangesService: ExchangesService) {
    }

    ngOnInit() {
        for (const exchange of Object.keys(this.exchangesService.exchanges)) {
            this.exchangesService.exchanges[exchange].getPairs().subscribe(data => {
                for (const pair of data) this.allPairs.push(pair);
            });
        }
    }

    onPairTyping(pair: string) {
        this.filterPairs(pair);
    }

    onPairSelected(pair: Pair) {
        this.selectedPair = pair;
        this.exchangesService.exchanges[pair.exchange.name].getPrice(pair).subscribe(data => {
            this.pairPrice = data;
        });
        this.pairExchange = pair.exchange.name;
    }

    toPercent(): number {
        const res =  ((this.pairPrice * 2) - (this.pairPrice / 2)) / 200;
        if (this.profitPercent > 0) return this.pairPrice + res;
        else return this.pairPrice - res;
    }

    getProfitPercent(value: number) {
        this.profitPercent = value;
    }

    filterPairs(key: string) {
        this.pairs = this.allPairs.filter(pair => (pair.symbol + '/' + pair.base).includes(key.toUpperCase()));
    }

    formatLabel(value: number | null) {
        if (!value) {
            return 0;
        }

        if (value >= 10) {
            return Math.round(value / 10) + '%';
        }

        return value;
    }

}
