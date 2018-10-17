import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TrpService} from "../trp.service";
import {TradingRecommendation} from "../trp";
import {CurrentUserService} from "../../../../core/services/current-user.service";
import {ExchangesService} from "../../../../core/services/exchanges/exchanges.service";
import {Pair} from "../../../../core/models/pair";
import {Router} from "@angular/router";

export const types =
    {
        Growth: 'Long',
        Neutral: 'Neutral',
        Falls: 'Short'
    };

export const periods =
    {
        'Hour': '1 hour',
        'Day': '1 day',
        'ThreeDays': '3 days',
        'Week': '1 week'
    };

@Component({
    selector: 'app-my-recommendations',
    templateUrl: './my-recommendations.component.html',
    styleUrls: ['../trp.component.scss']
})
export class MyRecommendationsComponent implements OnInit {
    @Output() changeRecommendationId: EventEmitter<number> = new EventEmitter<number>();
    myRecommendations: TradingRecommendation[];
    authorRating: number = 0;


    constructor(private trpService: TrpService, public currentUserService: CurrentUserService, private exchangesService: ExchangesService) {
    }

    ngOnInit() {
        this.trpService.getMyRecommendations().subscribe(data => {
            this.myRecommendations = data;

            this.trpService.getAuthorRating(this.currentUserService.user.id).subscribe(rating=> {
                for (const rec of this.myRecommendations) {
                    this.getIncreasePercent(rec);
                    rec.rating = rating;
                }
            });
        });
    }

    getIncreasePercent(recom: TradingRecommendation) {
        const pairConverted = new Pair().of(recom.pair.substring(recom.pair.indexOf('-') + 1), recom.pair.substring(0, recom.pair.indexOf('-')));
        this.exchangesService.exchanges[recom.stock].getPrice(pairConverted).subscribe(data =>
            recom.priceIncrease = ((data * 100) / recom.creationPrice) - 100);
    }

    goToRecommendation(id: number) {
        this.changeRecommendationId.emit(id);
    }
}
