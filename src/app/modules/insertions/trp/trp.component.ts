import {Component, Input, OnInit} from '@angular/core';
import {Pair} from "../../../core/models/pair";
import {config} from "../behavioral-analyzer/ngx-chart.config";
import {BehavioralDataTrades} from "../../../core/models/behavioral";
import {BittrexService} from "../../../core/services/exchanges/bittrex.service";
import {AvailableExchanges, Stock} from "../arbitrage/available-exchanges";
import {BinanceService} from "../../../core/services/exchanges/binance.service";
import {PairsFilterService} from "../../../core/services/pairs-filter/pairs-filter.service";
import {CreateRecommendationData} from "./trp";
import {ExchangesService} from "../../../core/services/exchanges/exchanges.service";


@Component({
    selector: 'app-social',
    templateUrl: './trp.component.html',
    styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', './trp.component.scss']
})
export class TrpComponent implements OnInit {
    activeTab: number = 0;

    fullGraph = false;
    select = false;
    errorText = '';
    stockSelected = false;
    connectedKeys = false;
    data = [
        {
            'name': 'Price changes after recommendation',
            'series': []
        }
    ];
    refLines = [
        { value: 2140, name: 'Take profit' }
    ];
    lineChartView = config.lineChartView;
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
    exchanges = ['New', 'Old'];

    lineChartAutoScale = config.lineChartAutoScale;
    lineChartLineInterpolation = config.lineChartLineInterpolation;

    public responseData: BehavioralDataTrades;
    public chosenStatistics = 'All';
    public availableStocks = [];
    public installedStocks = [];
    public globalPreloader = true;
    public requestPreloader = false;

    constructor(private bittrexService: BittrexService) {
    }

    ngOnInit() {
        this.data[0]['series'] = [];
        this.bittrexService.getCandles(new Pair().of('ETH', 'BTC', AvailableExchanges.availableStocks[0]), 'day').subscribe(data => {
            for (const item of data) {
                this.data[0]['series'].push({'value': item['C'], 'name': item['T'], 'min': (item['C'] - ((item['C'] * 99) / 100)), 'max': (item['C'] - ((item['C'] * 15) / 100))});
            }
            console.log(this.data)
        });
    }

}
