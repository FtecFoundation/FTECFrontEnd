import {Component, Input, OnInit} from '@angular/core';
import {config} from "../../behavioral-analyzer/ngx-chart.config";
import {Pair} from "../../../../core/models/pair";
import {AvailableExchanges} from "../../arbitrage/available-exchanges";
import {TradingRecommendation, TrpComment} from "../trp";
import {TrpService} from "../trp.service";
import {BittrexService} from "../../../../core/services/exchanges/bittrex.service";
import {CurrentUserService} from "../../../../core/services/current-user.service";
import {NotificationService} from "../../../account/notification/notification.service";
import {NotifyService} from "../../../../core/notify/notify.service";
import {Notify} from "../../../../core/notify/notifications";

@Component({
    selector: 'app-recommendation-view',
    templateUrl: './recommendation-view.component.html',
    styleUrls: ['../trp.component.scss']
})
export class RecommendationViewComponent implements OnInit {
    @Input() recommendation: TradingRecommendation;
    comments: TrpComment[] = [];

    data = [
        {
            'name': 'Price',
            'series': []
        }
    ];
    refLines = [
        {value: 2140, name: 'Take profit'}
    ];
    showRefLines = config.showRefLines;
    showRefLabels = config.showRefLabels;
    showGridLines = config.showGridLines;
    tooltipDisabled = config.tooltipDisabled;
    lineChartShowXAxis = config.lineChartShowXAxis;
    lineChartShowYAxis = config.lineChartShowYAxis;
    lineChartShowLegend = config.lineChartShowLegend;
    lineChartShowXAxisLabel = config.lineChartShowXAxisLabel;
    lineChartShowYAxisLabel = config.lineChartShowYAxisLabel;
    schemeType = config.schemeType;
    lineChartColorScheme = config.lineChartColorScheme;

    lineChartAutoScale = config.lineChartAutoScale;
    lineChartLineInterpolation = config.lineChartLineInterpolation;

    constructor(private bittrexService: BittrexService, private trpService: TrpService, public currentUserService: CurrentUserService, private _notificationService: NotifyService) {
    }

    ngOnInit() {
        console.log(this.recommendation);
        this.data[0]['series'] = [];
        this.bittrexService.getCandles(new Pair().of('CVC', 'BTC', AvailableExchanges.availableStocks[0]), 'day').subscribe(data => {
            for (const item of data) {
                this.data[0]['series'].push({
                    'value': item['C'],
                    'name': item['T'],
                    'min': (item['C'] - ((item['C'] * 99) / 100)),
                    'max': (item['C'] - ((item['C'] * 15) / 100))
                });
            }
        });

        this.trpService.getComments(this.recommendation.id).subscribe(data => this.comments = data);
    }

    addComment(message: any) {
        if(message.message.trim().length<=2){
            this._notificationService.addNotification(new Notify(this._notificationService.lastId, 'Invalid comment', 'Comment can\'t be less then 2 characters length', 'error'))
            return;
        }
        this.trpService.postComment(this.recommendation.id, message).subscribe(data => {

            this.trpService.getAuthorRating(data.userId).subscribe(rating => {
                const newComment = new TrpComment(data.userId, this.currentUserService.user.username, this.currentUserService.user.imageName,
                    rating, data.creationDate, data.message);
                this.comments.push(newComment)
            });
        });
    }

}
