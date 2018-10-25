import {Component, OnInit} from '@angular/core';
import {PairsFilterService} from "../../../../core/services/pairs-filter/pairs-filter.service";
import {AvailableExchanges, Stock} from "../../arbitrage/available-exchanges";
import {Pair} from "../../../../core/models/pair";
import {TrpService} from "../trp.service";
import {TrpFilter} from "../trp";

@Component({
    selector: 'app-filter-recommendations',
    templateUrl: './filter-recommendations.component.html',
    styleUrls: ['../trp.component.scss']
})
export class FilterRecommendationsComponent implements OnInit {
    exchanges = AvailableExchanges.availableStocks;
    exchange: Stock;
    date: Date;
    overdue: boolean = true;
    likes: number;
    priceList: string[] = ['Free', 'Paid', 'All'];
    price: string;

    constructor(public pairsFilterService: PairsFilterService, private trpService: TrpService) {
    }

    ngOnInit() {
        if (!this.pairsFilterService.allPairs) this.pairsFilterService.fillAllPairs();
    }

    onPairSelected(pair: Pair) {
        this.pairsFilterService.selectPair(pair);
    }

    filterPairs() {
        let filter = new TrpFilter();
        if (this.exchange) filter.stock = this.exchange.nameToSend;
        filter.minLikes = this.likes;
        filter.overdue = this.overdue;
        filter.price = this.price;
        if (this.pairsFilterService.selectedPair) filter.pair = `${this.pairsFilterService.selectedPair.base}-${this.pairsFilterService.selectedPair.symbol}`;
        filter.startDate = this.date;
        this.trpService.getAllRecommendations(filter).subscribe(data => console.log(data));
    }
}
