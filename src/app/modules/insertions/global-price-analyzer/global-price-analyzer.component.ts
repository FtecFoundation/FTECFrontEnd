import {Component, Input, OnInit} from '@angular/core';
import {globalPriceAnalyzer} from './global-price-analyzer';
import {PairsFilterService} from "../../../core/services/pairs-filter/pairs-filter.service";
import {Pair} from "../../../core/models/pair";
import {AvailableExchanges, Stock} from "../arbitrage/available-exchanges";
import {ExchangesService} from "../../../core/services/exchanges/exchanges.service";
import {GlobalPriceRequest, GlobalPriceResult} from "../../../core/models/global-price";
import {GlobalPriceAnalyzerService} from "./global-price-analyzer.service";
import {CryptocurrenciesService} from "../../../core/services/cryptocurrencies.service";


@Component({
    selector: 'app-social',
    templateUrl: './global-price-analyzer.component.html',
    styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', '../../account/my-exchanges/my-exchanges.component.scss', '../price-notification/price-notification.component.scss', '../order-manager/order-manager.component.scss', './global-price-analyzer.component.scss']
})
export class GlobalPriceAnalyzerComponent implements OnInit {

    price = globalPriceAnalyzer;

    exchanges: Stock[] = AvailableExchanges.availableStocks;
    chosenExchanges: string[] = [];
    preloader = false;
    allChosen = false;
    type: boolean = true;
    volume: number;
    selectedPairs: string[] = [];
    submitted: boolean = false;
    recommendedCurrs: string[] = [];
    allRecommendedCurrs: string[] = [];

    results: GlobalPriceResult;
    howTo: string[] = ['The user logs in and goes to the corresponding module ' +
    'to work with the stock segment.', 'The user selects a cryptocurrency pair for analysis.',
    'The user selects the exchanges on which he wants to analyse. ' +
    'Depending on the number of selected exchanges, the cost of the service is calculated.',
    'The results are obtained instantly in the form of a table which ' +
    'can be sorted by user\'s request. The table is relevant only at the time of ordering the service.'];

    constructor(public pairsFilterService: PairsFilterService, private exchangesService: ExchangesService,
                private _globalPriceService: GlobalPriceAnalyzerService, private cryptocurrenciesService: CryptocurrenciesService) {
    }

    ngOnInit() {
        this.exchanges = this.exchanges.filter(ex => ex.nameToSend != 'YObitNet');
        if (!this.pairsFilterService.allPairs) this.pairsFilterService.fillAllPairs();

        this.cryptocurrenciesService.getCryptocurrencies(22).subscribe(data => {
            for (const curr of Object.keys(data)) {
                if (data[curr].symbol === 'BTC' || data[curr].symbol === 'USDT') continue;
                this.recommendedCurrs.push(data[curr].symbol);
                this.allRecommendedCurrs.push(data[curr].symbol);
            }
        })

        this._globalPriceService.getHistory().subscribe();
    }

    addRecommendedCurr(curr: string) {
        this.selectedPairs.push('BTC-' + curr);
        this.recommendedCurrs = this.recommendedCurrs.filter(c => c != curr);
    }

    chooseExchange(exhange: any) {
        if (!this.allChosen) {
            exhange.globalPriceChosen = !exhange.globalPriceChosen;
        }
        this.fillChosenExchanges();
    }

    chooseAllExchanges() {
        for (const exchange of this.exchanges) {
            exchange.globalPriceChosen = !this.allChosen;
        }

        this.allChosen = !this.allChosen;
        this.fillChosenExchanges();
    }

    fillChosenExchanges() {
        this.chosenExchanges = [];
        for (const e of this.exchanges) {
            if (e.globalPriceChosen) {
                this.chosenExchanges.push(e.nameToSend);
            }
        }
    }

    getKeys(json: any): string[] {
        return Object.keys(json);
    }

    onPairSelected(pair: Pair) {
        this.pairsFilterService.selectPair(pair);
        this.selectedPairs.push((pair.base + '-' + pair.symbol).toUpperCase());
        this.pairsFilterService.selectedPair = null;
    }

    submitForm(){
        this.submitted = true;
        if (this.selectedPairs.length && this.selectedPairs.length <= 10 && this.chosenExchanges.length && this.volume >= 0.05 && this.volume <= 50 && this.volume) {
            this.preloader = true;
           this._globalPriceService.searchPrices(this.prepareData()).subscribe(data => {
               this.results = data;
               this.preloader = false;

               for (const p of Object.keys(data)) {
                   this.results[p].array = data[p];
                   this.results[p].opened = false;
                   this.results[p].array.sort((a, b) => b.percentOfSaving - a.percentOfSaving);
               }
           });
        }
    }

    prepareData(): GlobalPriceRequest{
        return new GlobalPriceRequest(this.chosenExchanges, this.selectedPairs, this.volume, this.type);
    }

    deletePair(pair: string) {
        const symbol = pair.substring(4);
        if (this.allRecommendedCurrs.indexOf(symbol) !== -1) this.recommendedCurrs.push(symbol);
        this.selectedPairs = this.selectedPairs.filter(p => p != pair);
    }

}
