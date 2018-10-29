import {Component, Input, OnInit} from '@angular/core';
import {Pair} from "../../../core/models/pair";
import {config} from "../behavioral-analyzer/ngx-chart.config";
import {BehavioralDataTrades} from "../../../core/models/behavioral";
import {BittrexService} from "../../../core/services/exchanges/bittrex.service";
import {ActivatedRoute, Router} from "@angular/router";
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

    howTo: string[] = ['.For the downstream users there is a general strip of all trading ' +
    'recommendations with the authors mentioning, their reputation and specific ' +
    'recommendations pricing set by the author. In addition, it is possibility ' +
    'of a paid subscription on all recommendations of the author for a certain ' +
    'period.',
    'Traders-authors publish their own trading recommendations.',
    'Moderators track the success of the author\'s recommendations, on ' +
    'the basis of which is determined by the author\'s reputation rating.',
    'Users take into account the rating of the trader\'s author during the recommendations purchasing.'];

    constructor(private trpService: TrpService, private exchangesService: ExchangesService, private imagesService: ImageService,
                private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.recommendationId = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

        this.getRecommendations();

        if (this.recommendationId) {
            this.getRecommendationForView();
        }
    }

    getRecommendations() {
        let filter = new TrpFilter();
        filter.overdue = true;
        this.trpService.getAllRecommendations(filter).subscribe(data => {
            this.filterRecommendations(data);

            for (const rec of this.recommendations) {
                rec.priceIncrease = ((1 * 100) / rec.creationPrice) - 100;
                // this.getIncreasePercent(rec);
            }
        });
    }

    filterRecommendations(data: TradingRecommendation[]) {
        let old: TradingRecommendation[] = [], latest: TradingRecommendation[] = [];

        for (const rec of data) {
            if (rec.status !== 'Waiting') old.push(rec);
            else latest.push(rec);
        }

        this.recommendations = latest.concat(old);
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
        if (recom.status === 'Waiting') {
            this.exchangesService.exchanges[recom.stock].getPrice(pairConverted).subscribe(data =>
                recom.priceIncrease = ((data * 100) / recom.creationPrice) - 100);
        } else {
            recom.priceIncrease = ((recom.endPrice * 100) / recom.creationPrice) - 100;
        }
    }

    changeRecommendation(id: number) {
        this.activeTab = 0;
        this.recommendationId = id;
        this.getRecommendationForView();
    }

    toAllRecommendations() {
        this.getRecommendations();
        this.router.navigateByUrl('/modules/trp');
    }

    onFilteredRecommendations(data: TradingRecommendation[]) {
        this.filterRecommendations(data);
        this.router.navigateByUrl('/modules/trp');
    }
}
