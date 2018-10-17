import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TradingRecommendation} from "../trp";
import {TrpService} from "../trp.service";
import {CurrentUserService} from "../../../../core/services/current-user.service";
import {ExchangesService} from "../../../../core/services/exchanges/exchanges.service";
import {Pair} from "../../../../core/models/pair";
import {ImageService} from "../../../../core/services/image.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-all-recommendations',
    templateUrl: './all-recommendations.component.html',
    styleUrls: ['../trp.component.scss']
})
export class AllRecommendationsComponent implements OnInit {
    @Input() recommendations: TradingRecommendation[];
    @Output() changeRecommendationId: EventEmitter<number> = new EventEmitter<number>();

    constructor(public currentUserService: CurrentUserService) {
    }

    ngOnInit() {
    }

    goToRecommendation(id: number) {
        this.changeRecommendationId.emit(id);
    }
}
