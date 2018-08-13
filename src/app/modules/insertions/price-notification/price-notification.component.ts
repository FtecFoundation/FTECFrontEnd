import {Component, Input, OnInit} from '@angular/core';
import {priceNotification} from './price-notification';
import {AvailableExchanges} from '../arbitrage/available-exchanges';
import {BinanceService} from "../../../core/services/exchanges/binance.service";
import {EtherscanService} from "../../../core/services/etherscan.service";
import {CurrentUserService} from "../../../core/services/current-user.service";
import {HitBTCService} from "../../../core/services/exchanges/hitbtc.service";
import {BittrexService} from "../../../core/services/exchanges/bittrex.service";
import {Pair} from "../../../core/models/pair";

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

    constructor(private currentUser: CurrentUserService, private hitbtcService: HitBTCService,
                private bittrexService: BittrexService, private binanceService: BinanceService) {
    }

    ngOnInit() {
        this.binanceService.getPairs().subscribe(data => {
            for (const pair of data) this.allPairs.push(pair);
        });

        this.bittrexService.getPairs().subscribe(data => {
            for (const pair of data) this.allPairs.push(pair);
        });

        this.hitbtcService.getPairs().subscribe(data => {
            for (const pair of data) this.allPairs.push(pair);
        });
    }

    onPairTyping(pair: string) {
        this.filterPairs(pair);
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
