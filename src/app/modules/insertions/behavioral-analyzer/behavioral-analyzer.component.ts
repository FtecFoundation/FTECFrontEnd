import { Component, OnInit, Directive } from '@angular/core';
import { config } from './ngx-chart.config';
import { BehavioralAnalyzerService } from './behavioral-analyzer.service';
import { BehavioralDataTrades, StockBehavioralData } from '../../../core/models/behavioral';
import { CurrentUserService } from '../../../core/services/current-user.service';
import { AvailableExchanges, Stock } from '../arbitrage/available-exchanges';
import { RouterPreloader } from '@angular/router';

@Component({
    selector: 'app-social',
    templateUrl: './behavioral-analyzer.component.html',
    styleUrls: ['../insertions.scss', './behavioral-analyzer.component.scss']
})

export class BehavioralAnalyzerComponent implements OnInit {

    fullGraph = false;
    select = false;
    errorText = '';
    stockSelected = false;
    data = [
        {
            'name': 'New Zealand',
            'series': [
                {
                    'value': 2091,
                    'name': '2016-09-17T09:28:51.244Z',
                    'min': 1,
                    'max': 1471
                },
                {
                    'value': 5925,
                    'name': '2016-09-16T16:46:50.860Z',
                    'min': 1,
                    'max': 5305
                },
                {
                    'value': 5239,
                    'name': '2016-09-18T04:50:55.748Z',
                    'min': 1,
                    'max': 4619
                },
                {
                    'value': 2140,
                    'name': '2016-09-13T02:57:08.520Z',
                    'min': 1,
                    'max': 1520
                },
                {
                    'value': 3712,
                    'name': '2016-09-16T05:30:21.402Z',
                    'min': 1,
                    'max': 3092
                }
            ]
        }
    ];
    refLines = [
        { value: 2140, name: 'Recommended' },
        { value: 1000, name: 'You' }
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

    private stockToSend: Stock;

    constructor(private _behavioralAnalyzerService: BehavioralAnalyzerService,
        private _currentUserService: CurrentUserService) {
    }

    ngOnInit() {
        this.globalPreloader = true;

        this._behavioralAnalyzerService.getHistory().subscribe(value => {

            this.responseData = value;

            this.recountGlobalStats();

            if (this.responseData.operations['All'].length == 0 ) {
            }

            this.globalPreloader = false;

        });

        this._currentUserService.getStockKeys(false).subscribe(keys => {


            for (const key of keys) {
                this.installedStocks.push(AvailableExchanges.ofName(key.stock));
            }
        });

    }

    onSelect(event) {
        this.chosenStatistics = event;
    }

    showFull(graph: any) {
        graph.chosen = !graph.chosen;
    }

    setStockToSend(chosenStock: Stock) {
        this.stockToSend = chosenStock;
        this.stockSelected = true;
    }

    private recountGlobalStats() {
        const allStats = new StockBehavioralData();

        this.availableStocks = Object.keys(this.responseData.statistics);
        for (const key of this.availableStocks) {
            allStats.accuracy += this.responseData.statistics[key].accuracy;
            allStats.failedOrders += this.responseData.statistics[key].failedOrders;
            allStats.successfulOrders += this.responseData.statistics[key].successfulOrders;
            allStats.panicSell += this.responseData.statistics[key].panicSell;
            allStats.panicBuy += this.responseData.statistics[key].panicBuy;
            allStats.profitLoss += this.responseData.statistics[key].profitLoss;
        }

        if (this.availableStocks.length > 0) {
            allStats.accuracy /= this.availableStocks.length;
        }
        this.responseData.statistics['All'] = allStats;

        const allData = [];
        for (const key of this.availableStocks) {
            for (const currentOperation of this.responseData.operations[key]) {
                allData.push(currentOperation);
            }
        }
        this.responseData.operations['All'] = allData;
        this.availableStocks.unshift('All');
    }
    public sendRequest() {
        this.requestPreloader = true;

        if (!this.stockToSend) { return; }
        this._behavioralAnalyzerService.getTrades(this.stockToSend).subscribe(data => {
            this.responseData.operations[this.stockToSend.nameToSend] = data.operations[this.stockToSend.nameToSend];
            this.responseData.statistics[this.stockToSend.nameToSend] = data.statistics[this.stockToSend.nameToSend];
            this.recountGlobalStats();
            this.requestPreloader = false;
        }
        );
    }
}
