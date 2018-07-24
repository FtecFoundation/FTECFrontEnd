import {Component, Input, OnInit} from '@angular/core';
import {behavioralAnalyzerItems} from './behavioral-analyzer';
import * as chartsData from './ngx-chart.config';
import {config} from './ngx-chart.config';
import {BehavioralAnalyzerService} from './behavioral-analyzer.service';

@Component({
    selector: 'app-social',
    templateUrl: './behavioral-analyzer.component.html',
    styleUrls: ['../insertions.scss', './behavioral-analyzer.component.scss']
})
export class BehavioralAnalyzerComponent implements OnInit {

    behavioralItems = behavioralAnalyzerItems;
    time = ["All time", "New", "Old", "Rating"];
    fullGraph = false;
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

    lineChartAutoScale = config.lineChartAutoScale;
    lineChartLineInterpolation = config.lineChartLineInterpolation;

    constructor(private _behavioralAnalyzerService: BehavioralAnalyzerService) {
    }

    ngOnInit() {
        this._behavioralAnalyzerService.getTrades().subscribe(data => {
            console.log();
        })
    }

    onSelect(event) {
        console.log(event);
    }
    
    showFull() {
        this.fullGraph = !this.fullGraph;
    }

}
