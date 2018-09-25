import {Component, Input, OnInit} from '@angular/core';
import {globalPriceAnalyzer} from './global-price-analyzer';
import {PairsFilterService} from "../../../core/services/pairs-filter/pairs-filter.service";
import {Pair} from "../../../core/models/pair";
import {AvailableExchanges, Stock} from "../arbitrage/available-exchanges";
import {ExchangesService} from "../../../core/services/exchanges/exchanges.service";
import {GlobalPriceRequest, GlobalPriceResult} from "../../../core/models/global-price";
import {GlobalPriceAnalyzerService} from "./global-price-analyzer.service";


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

    results: GlobalPriceResult;

    constructor(public pairsFilterService: PairsFilterService, private exchangesService: ExchangesService,
                private _globalPriceService: GlobalPriceAnalyzerService) {
    }

    ngOnInit() {
        this.exchanges = this.exchanges.filter(ex => ex.nameToSend != 'YObitNet');
        if (!this.pairsFilterService.allPairs) this.pairsFilterService.fillAllPairs();
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
    }

    submitForm(){
        this.submitted = true;
        if (this.selectedPairs.length && this.selectedPairs.length < 10 && this.chosenExchanges.length && this.volume > 0.05 && this.volume < 50 && this.volume) {
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
        this.selectedPairs = this.selectedPairs.filter(p => p != pair);
    }

}
