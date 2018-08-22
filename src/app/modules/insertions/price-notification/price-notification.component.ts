import {Component, OnInit} from '@angular/core';
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
    exchangesList: Stock[] = [];

    smsNot: boolean = false;
    telegramNot: boolean = false;
    emailNot: boolean = false;
    webNot: boolean = false;

    typeNotChosen: boolean = false;

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

    chooseStock(stock: Stock) {
        this.pairExchange = stock;
    }

    onPairSelected(pair: Pair) {
        this.selectedPair = pair;
        this.exchangesList = [];
        for (const p of this.pairs) {
            if (this.selectedPair.base === p.base && this.selectedPair.symbol === p.symbol) this.exchangesList.push(p.exchange);
        }
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

    deleteNotification(id: number) {
        this.pNotificationService.deleteNotification(id).subscribe(data => {
            this.available = data;
            this.priceNotifications = this.priceNotifications.filter(notif => notif.id !== id);
        })
    }

    getProfitPercent(value: number) {
        this.profitPercent = value;
    }

    filterPairs(key: string) {
        this.pairs = this.allPairs.filter(pair => (pair.symbol + '/' + pair.base).includes(key.toUpperCase()));
    }

    prepareData() {
        return {
            'stock': this.pairExchange.nameToSend,
            'pairParam1': this.selectedPair.base,
            'pairParam2': this.selectedPair.symbol,
            'divergence': this.profitPercent,
            'isSmsNotification': this.smsNot,
            'isTelegramNotification': this.telegramNot,
            'isEmailNotification': this.emailNot,
            'isWebNotification': this.webNot
        };
    }

    addNotification() {
        if (this.smsNot || this.emailNot || this.telegramNot || this.webNot) {
            this.pNotificationService.addNotification(this.prepareData()).subscribe(data => {
                this.available = data.available;
                this.priceNotifications.push(new PriceNotification(data.notifId, this.pairExchange.name,
                    this.selectedPair.symbol + '-' + this.selectedPair.base, this.profitPercent, this.pairPrice,
                    this.smsNot, this.telegramNot, this.emailNot, this.webNot));
            });
        } else {
            this.typeNotChosen = true;
        }
    }

}
