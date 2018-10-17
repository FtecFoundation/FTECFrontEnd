import {Component, Input, OnInit} from '@angular/core';
import {Pair} from "../../../core/models/pair";
import {config} from "../behavioral-analyzer/ngx-chart.config";
import {BehavioralDataTrades} from "../../../core/models/behavioral";
import {BittrexService} from "../../../core/services/exchanges/bittrex.service";
import {AvailableExchanges, Stock} from "../arbitrage/available-exchanges";
import {ActivatedRoute} from "@angular/router";
import {TrpService} from "./trp.service";
import {TradingRecommendation, TrpFilter} from "./trp";
import {ExchangesService} from "../../../core/services/exchanges/exchanges.service";
import {ImageService} from "../../../core/services/image.service";


@Component({
    selector: 'app-social',
    templateUrl: './trp.component.html',
    styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', './trp.component.scss']
})
export class TrpComponent implements OnInit {
    activeTab: number = 0;

    select = false;
    public availableStocks = [];

    pairs: Pair[];

    recommendationId: number;
    recommendations: TradingRecommendation[];
    recommendation: TradingRecommendation;

    constructor(private trpService: TrpService, private exchangesService: ExchangesService, private imagesService: ImageService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.recommendationId = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

        this.getRecommendations();

        if (this.recommendationId) {
            this.getRecommendationForView();
        }
    }

    getRecommendations() {
        this.trpService.getAllRecommendations().subscribe(data => {
            this.recommendations = data;

            for (const rec of this.recommendations) {
                this.getIncreasePercent(rec);
            }
        });
    }

    getRecommendationForView() {
        let filter = new TrpFilter();
        filter.overdue = true;

        this.trpService.getAllRecommendations(filter).subscribe(data => {
            this.recommendation = data.filter(rec => rec.id === this.recommendationId)[0];
                this.getIncreasePercent(this.recommendation);
        });
    }

    getIncreasePercent(recom: TradingRecommendation) {
        const pairConverted = new Pair().of(recom.pair.substring(recom.pair.indexOf('-') + 1), recom.pair.substring(0, recom.pair.indexOf('-')));
        this.exchangesService.exchanges[recom.stock].getPrice(pairConverted).subscribe(data =>
            recom.priceIncrease = ((data * 100) / recom.creationPrice) - 100);
    }

    changeRecommendation(id: number) {
        this.activeTab = 0;
        this.recommendationId = id;
        this.getRecommendationForView();
    }
}
