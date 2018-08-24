import {Component, Input, OnInit} from '@angular/core';
import {orderManager} from './order-manager';
import {AvailableExchanges, Stock} from '../arbitrage/available-exchanges';
import {PairsFilterService} from "../../../core/services/pairs-filter/pairs-filter.service";
import {Pair} from "../../../core/models/pair";
import {ExchangesService} from "../../../core/services/exchanges/exchanges.service";
import {OrderManagerService} from "./order-manager.service";
import {Order} from "../../../core/models/order-manager";

@Component({
    selector: 'app-social',
    templateUrl: './order-manager.component.html',
    styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', '../../account/my-exchanges/my-exchanges.component.scss', '../price-notification/price-notification.component.scss', './order-manager.component.scss']
})
export class OrderManagerComponent implements OnInit {

    orderType: string = 'Buy';
    orders: Order[];

    amount: number;
    profitPercent: number = 0;
    pairPrice: number;
    pairExchange: Stock;
    available: number = 100;

    amountNotSet: boolean = false;

    constructor(public pairsFilterService: PairsFilterService, private exchangesService: ExchangesService,
                private orderManagerService: OrderManagerService) {
    }

    ngOnInit() {
        this.pairsFilterService.selectedPair = null;
        if (!this.pairsFilterService.allPairs) this.pairsFilterService.fillAllPairs();

        this.orderManagerService.getActiveOrders().subscribe(data => {
            this.orders = data;
            this.available -= this.orders.length;
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

        this.exchangesService.exchanges[pair.exchange.name].getPrice(pair).subscribe(data => {
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

    toPercent(price: number, percent: number): number {
        const res: number =  (price * Math.abs(percent)) / 100;
        if (percent > 0) return price + res;
        else return price - res;
    }

    addOrder() {
        if (this.amount) {
            this.orderManagerService.addOrder(this.prepareData()).subscribe(data => {
                this.orders.push(new Order(data.orderId,
                    this.pairsFilterService.selectedPair.symbol + '-' + this.pairsFilterService.selectedPair.base,
                    this.pairExchange.name, this.profitPercent, this.amount, this.pairPrice, this.orderType));
                this.available = data.available;
            })
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
