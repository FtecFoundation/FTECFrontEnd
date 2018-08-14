import {Component, Input, OnInit} from '@angular/core';
import {AvailableExchanges, Stock} from '../arbitrage/available-exchanges';
import {CurrentUserService} from "../../../core/services/current-user.service";
import {Pair} from "../../../core/models/pair";
import {ExchangesService} from "../../../core/services/exchanges/exchanges.service";
import {PriceNotificationService} from "./price-notification.service";
import {PriceNotification} from "../../../core/models/price-notification";

@Component({
    selector: 'app-social',
    templateUrl: './price-notification.component.html',
    styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', '../../account/my-exchanges/my-exchanges.component.scss', './price-notification.component.scss']
})
export class PriceNotificationComponent implements OnInit {

    exchanges = AvailableExchanges.availableStocks;
    priceNotifications: PriceNotification[];
    allPairs: Pair[] = [];
    pairs: Pair[] = [];
    profitPercent: number = 0;
    selectedPair: Pair;
    pairPrice: number;
    pairExchange: Stock;
    available: number = 100;

    constructor(private currentUser: CurrentUserService, private exchangesService: ExchangesService,
                private pNotificationService: PriceNotificationService) {
    }

    ngOnInit() {
        this.pNotificationService.getActiveNotifications().subscribe(data => {
            this.priceNotifications = data;
            this.available -= this.priceNotifications.length;
        });

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
        this.pairExchange = pair.exchange;
    }

    toPercent(price: number, percent: number): number {
        const res: number =  (price * Math.abs(percent)) / 100;
        if (percent > 0) return price + res;
        else return price - res;
    }

    getProfitPercent(value: number) {
        this.profitPercent = value;
    }

    filterPairs(key: string) {
        this.pairs = this.allPairs.filter(pair => (pair.symbol + '/' + pair.base).includes(key.toUpperCase()));
    }

    prepareData() {
        const data = {'stock': this.pairExchange.nameToSend, 'pairParam1': this.selectedPair.symbol,
            'pairParam2': this.selectedPair.base, 'divergence': this.profitPercent};
        return data;
    }

    addNotification() {
        this.pNotificationService.addNotification(this.prepareData()).subscribe(data => {
            this.available = data.available;
            this.priceNotifications.push(new PriceNotification(data.notifId, this.pairExchange.name,
                this.selectedPair.symbol + '-' + this.selectedPair.base, this.profitPercent, this.pairPrice));
        });
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
