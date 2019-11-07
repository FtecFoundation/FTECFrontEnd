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

    telegramDisabled: boolean;

    typeNotChosen: boolean = false;
    focusOnField: boolean = false;

    percentButtons: number[] = [-10, -5, -3, 3, 5, 10];
    howTo: string[] = ['The user logs in and goes to the corresponding module ' +
    'to work with price notifications.', 'The user forms the list of exchanges he wants to receive ' +
    'Notification from.', 'The user selects the pairs that interest him.',
    'For each pair, flexible settings are provided for price analysis - lists of TP, SL coefficients, permissible ' +
    'deviation percentage.',
    'Then the user chooses all available ways of  information - notifications to mail, phone, mobile / desktop  application. You can choose several options at a time.'];

    constructor(private currentUser: CurrentUserService, public pairsFilterService: PairsFilterService,
                private pNotificationService: PriceNotificationService, private exchangesService: ExchangesService) {
    }

    ngOnInit() {
        this.pNotificationService.getActiveNotifications().subscribe(data => {
            this.priceNotifications = data;
            this.available -= this.priceNotifications.length;
        });

        this.telegramDisabled = !this.currentUser.notificationSettings['4']['telegram'];
        //console.log(this.currentUser.notificationSettings['4']['telegram']);

        if (!this.pairsFilterService.allPairs) this.pairsFilterService.fillAllPairs(false, true);
    }

    fromPercent(newPrice: string, price: number) {
        const res: number =  (Number.parseFloat(newPrice) * 100) / Number.parseFloat('' + price);
        this.profitPercent = res - 100;
    }

    onPairSelected(pair: Pair) {
        this.pairsFilterService.selectPair(pair);

        this.exchangesService.exchanges[pair.exchange.nameToSend].getPrice(pair).subscribe(data => {
            this.pairPrice = data;
        });
        this.pairExchange = pair.exchange;
    }

    chooseStock(stock: Stock) {
        this.pairExchange = stock;
        this.exchangesService.exchanges[stock.nameToSend].getPrice(this.pairsFilterService.selectedPair).subscribe(data => {
            this.pairPrice = data;
        })
    }

    toPercent(price: number, percent: number): number {
        const res: number =  (price * Math.abs(percent)) / 100;
        if (percent > 0) return Number.parseFloat('' + price) + res;
        else return Number.parseFloat('' + price) - res;
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

    round(value : number){
        return Math.round(value * 100) / 100;
    }

}
