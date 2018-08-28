import {Component, OnInit} from '@angular/core';
import {AvailableExchanges, Stock} from '../arbitrage/available-exchanges';
import {CurrentUserService} from "../../../core/services/current-user.service";
import {Pair} from "../../../core/models/pair";
import {ExchangesService} from "../../../core/services/exchanges/exchanges.service";
import {PriceNotificationService} from "./price-notification.service";
import {PriceNotification} from "../../../core/models/price-notification";
import {PairsFilterService} from "../../../core/services/pairs-filter/pairs-filter.service";

@Component({
    selector: 'app-social',
    templateUrl: './price-notification.component.html',
    styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', '../../account/my-exchanges/my-exchanges.component.scss', './price-notification.component.scss']
})
export class PriceNotificationComponent implements OnInit {

    priceNotifications: PriceNotification[];
    profitPercent: number = 0;
    pairPrice: number;
    pairExchange: Stock;
    available: number = 100;

    smsNot: boolean = false;
    telegramNot: boolean = false;
    emailNot: boolean = false;
    webNot: boolean = false;

    typeNotChosen: boolean = false;

    constructor(private currentUser: CurrentUserService, public pairsFilterService: PairsFilterService,
                private pNotificationService: PriceNotificationService, private exchangesService: ExchangesService) {
    }

    ngOnInit() {
        this.pNotificationService.getActiveNotifications().subscribe(data => {
            this.priceNotifications = data;
            this.available -= this.priceNotifications.length;
        });

        if (!this.pairsFilterService.allPairs) this.pairsFilterService.fillAllPairs();
    }

    onPairSelected(pair: Pair) {
        this.pairsFilterService.selectPair(pair);

        this.exchangesService.exchanges[pair.exchange.name].getPrice(pair).subscribe(data => {
            this.pairPrice = data;
        });
        this.pairExchange = pair.exchange;
    }

    chooseStock(stock: Stock) {
        this.pairExchange = stock;
        this.exchangesService.exchanges[stock.name].getPrice(this.pairsFilterService.selectedPair).subscribe(data => {
            this.pairPrice = data;
        })
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

    prepareData() {
        return {
            'stock': this.pairExchange.nameToSend,
            'baseAsset': this.pairsFilterService.selectedPair.base,
            'secondaryAsset': this.pairsFilterService.selectedPair.symbol,
            'divergence': this.profitPercent,
            'smsNotification': this.smsNot,
            'telegramNotification': this.telegramNot,
            'emailNotification': this.emailNot,
            'webNotification': this.webNot
        };
    }

    addNotification() {
        if (this.smsNot || this.emailNot || this.telegramNot || this.webNot) {
            this.pNotificationService.addNotification(this.prepareData()).subscribe(data => {
                this.available = data.available;
                this.priceNotifications.push(new PriceNotification(data.notifId, this.pairExchange.name,
                    this.pairsFilterService.selectedPair.symbol + '-' + this.pairsFilterService.selectedPair.base, this.profitPercent, this.pairPrice,
                    this.smsNot, this.telegramNot, this.emailNot, this.webNot));
            });
        } else {
            this.typeNotChosen = true;
        }
    }

}
