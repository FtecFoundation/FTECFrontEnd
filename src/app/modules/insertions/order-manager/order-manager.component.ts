import {Component, Input, OnInit} from '@angular/core';
import {orderManager} from './order-manager';
import {AvailableExchanges, Stock} from '../arbitrage/available-exchanges';
import {PairsFilterService} from "../../../core/services/pairs-filter/pairs-filter.service";
import {Pair} from "../../../core/models/pair";
import {ExchangesService} from "../../../core/services/exchanges/exchanges.service";
import {OrderManagerService} from "./order-manager.service";
import {Order} from "../../../core/models/order-manager";
import {MyExchangesService} from "../../account/my-exchanges/my-exchanges.service";
import {CurrentUserService} from "../../../core/services/current-user.service";

@Component({
    selector: 'app-social',
    templateUrl: './order-manager.component.html',
    styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', '../../account/my-exchanges/my-exchanges.component.scss', '../price-notification/price-notification.component.scss', './order-manager.component.scss']
})
export class OrderManagerComponent implements OnInit {

    orderType: string = 'Buy';
    orders: Order[];
    balanceError: boolean = false;

    amount: number;
    profitPercent: number = 0;
    pairPrice: number;
    pairExchange: Stock;
    available: number = 100;
    submitted: boolean = false;
    focusOnField: boolean = false;

    percentButtons: number[] = [-10, -5, -3, 3, 5, 10];
    connectedExchanges: string[] = [];

    amountNotSet: boolean = false;
    howTo: string[] = ['User downloads and installs application for their mobile operation system. The support of the most popular operational systems – iOS, Android –  is expected.',
    'After the launch of the program user enters their data to access the FTEC account. A two-factor validation is required (with linked phone number or email) and linking of the new device to account.',
    'The application conducts a survey on user`s preferences using intuitive interface. For example, whether the user would like to use.',
    'The user goes through a quick introduction to the app and its interface.',
    'User has total control over the app and can use all services that are available to user`s FTEC account.'];

    constructor(public pairsFilterService: PairsFilterService, private exchangesService: ExchangesService,
                private orderManagerService: OrderManagerService, public _currentUserService: CurrentUserService) {
    }

    ngOnInit() {
        this.pairsFilterService.selectedPair = null;
        this.pairsFilterService.fillAllPairs(true);

        this.orderManagerService.getActiveOrders().subscribe(data => {
            this.orders = data;
            this.available -= this.orders.length;
        });

        this._currentUserService.getStockKeys(false).subscribe(data => {
           for (const key of data) {
               this.connectedExchanges.push(key.stock.nameToSend);
           }
        });
    }

    prepareData() {
        return {
            'stock': this.pairExchange.nameToSend,
            'baseAsset': this.pairsFilterService.selectedPair.base,
            'secondaryAsset': this.pairsFilterService.selectedPair.symbol,
            'divergence': this.profitPercent,
            'amount': this.amount,
            'type': this.orderType
        };
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
    }

    getProfitPercent(value: number) {
        this.profitPercent = value;
    }

    fromPercent(newPrice: string, price: number) {
        const res: number =  (Number.parseFloat(newPrice) * 100) / Number.parseFloat('' + price);
        this.profitPercent = res - 100;
    }

    toPercent(price: number, percent: number): any {
        const res: number =  (price * Math.abs(percent)) / 100;
        if (percent > 0) return Number.parseFloat('' + price) + res;
        else return Number.parseFloat('' + price) - res;
    }

    addOrder() {
        this.submitted = true;

        if (this.amount && this.pairExchange && this.connectedExchanges.indexOf(this.pairExchange.nameToSend) === -1) {
            this.amountNotSet = false;
            this.orderManagerService.checkBalance(this.pairExchange.nameToSend,
                this.pairsFilterService.selectedPair.symbol).subscribe(data => {
                    if (!data || data < this.amount) {
                        this.balanceError = true;
                    } else {
                        this.balanceError = false;
                        this.orderManagerService.addOrder(this.prepareData()).subscribe(data => {
                            this.orders.push(new Order(data.orderId,
                                this.pairsFilterService.selectedPair.symbol + '-' + this.pairsFilterService.selectedPair.base,
                                this.pairExchange.nameToSend, this.profitPercent, this.amount, this.pairPrice, this.orderType));
                            this.available = data.available;
                        })
                    }
            });
        } else {
            this.amountNotSet = true;
        }
    }

    deleteOrder(id: number) {
        this.orderManagerService.deleteOrder(id).subscribe(data => {
            this.available = data;
            this.orders =this.orders.filter(order => order.id !== id);
        })
    }

}
