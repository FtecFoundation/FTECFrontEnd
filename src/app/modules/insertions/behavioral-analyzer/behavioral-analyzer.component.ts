import { Component, OnInit, Directive } from '@angular/core';
import { config } from './ngx-chart.config';
import { BehavioralAnalyzerService } from './behavioral-analyzer.service';
import {BehavioralData, BehavioralRequest} from '../../../core/models/behavioral';
import { CurrentUserService } from '../../../core/services/current-user.service';
import { AvailableExchanges, Stock } from '../arbitrage/available-exchanges';
import {Router, RouterPreloader} from '@angular/router';
import {FaqService} from '../../faq/faq.service';

@Component({
    selector: 'app-social',
    templateUrl: './behavioral-analyzer.component.html',
    styleUrls: ['../insertions.scss', './behavioral-analyzer.component.scss']
})

export class BehavioralAnalyzerComponent implements OnInit {
    howTo: string[] = ['Assistant examines user`s orders on chosen exchanges and analyzes situation that follows them.',
    'Based on collected data, algorithm conducts a thorough analysis of trader`s behavioral factor.',
    'Assistant generates interim summary with advice on how to improve quality of trading decisions that trader will make in the future.nterim summary tes factor.orithm conducts a thorough analysis of rading psychology to make trades more profitable.',
    'There is a separate summary on potentially lost profit due to wrong and impulsive decisions of the trader.'];
    fullGraph = false;
    select = false;
    errorText = '';
    stockSelected = false;
    connectedKeys = false;
    min: number;
    max: number;
    buy: string = 'Buy';
    types: string[] = ['Scalping', 'Mixed', 'Default'];
    depth: string;
    submitted: boolean = false;

    public responseData: BehavioralData;
    public chosenStatistics = 'All';
    public availableStocks = [];
    public installedStocks = [];
    public globalPreloader = true;
    public requestPreloader = false;
    statistics = {accuracy: 0, failed: 0, succeeded: 0};

    private stockToSend: Stock;

    constructor(private _behavioralAnalyzerService: BehavioralAnalyzerService,
        private _currentUserService: CurrentUserService, public router: Router) {
    }

    ngOnInit() {
        this.globalPreloader = true;

        this._behavioralAnalyzerService.getHistory().subscribe(value => {

            this.responseData = value;

            this.getStatistics(value);

            this.globalPreloader = false;

        });

        this._currentUserService.getStockKeys(false).subscribe(keys => {

            for (const key of keys) {
                this.installedStocks.push(AvailableExchanges.ofName(key.stock.nameToSend));
            }
            this.connectedKeys = true;
        });

    }

    getKeys(obj: any): string[] {
        return Object.keys(obj);
    }

    getStatistics(data: BehavioralData) {
        let counter = 0;
        for (const time of this.getKeys(data)) {
            for (const item of data[time].results) {
                if (item.success) this.statistics.succeeded++;
                if (!item.success) this.statistics.failed++;
                counter++;
            }
        }

        this.statistics.accuracy = (this.statistics.succeeded * 100) / counter;
    }

    onSelect(event) {
        this.chosenStatistics = event;
    }

    setStockToSend(chosenStock: Stock) {
        this.stockToSend = chosenStock;
        this.stockSelected = true;
    }

    private  recountGlobalStats() {

    }

    public sendRequest() {
        this.submitted = true;
        const request = new BehavioralRequest(this.depth, this.min, this.max, this.stockToSend.nameToSend, this.buy);

        if (this.depth && this.min && this.max && this.stockToSend) {
            this.requestPreloader = true;

            this._behavioralAnalyzerService.getTrades(request).subscribe(data => {
                this.requestPreloader = false;

                const date = new Date().getTime();

                this.responseData[date] = data;
            });
        }
    }
}
