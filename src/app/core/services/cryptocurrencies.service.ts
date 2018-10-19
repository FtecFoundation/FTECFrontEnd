import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, tap} from "rxjs/operators";
import {CurrencyTop} from "../../modules/insertions/portfolio-manager/currency-top";
import {BinanceService} from "./exchanges/binance.service";
import {BittrexService} from "./exchanges/bittrex.service";

@Injectable()
export class CryptocurrenciesService {

    getCryptocurrenciesUrl = 'https://api.coinmarketcap.com/v2/ticker/';
    now = new Date().getTime();
    currenciesTopData: CurrencyTop[] = [];
    btcPrice: number;
    topPairs: any;

    running: number = 0;

    constructor(private _http: HttpClient, private binanceService: BinanceService, private bittrexService: BittrexService) {
    }

    getCryptocurrencies(): Observable<any> {
        const params = new HttpParams().set('limit', '100').set('sort', 'rank').set('start', '1');
        return this._http.get(this.getCryptocurrenciesUrl, {params: params}).pipe(map(resp => {
            let topFive: any = {};
            let counter = 0;
            for (const key of Object.keys(resp['data'])) {
                if (counter++ === 5) break;
                topFive[key] = resp['data'][key];
            }
            return topFive;
        }));
    }

    getCryptocurrenciesTop() {
        const param = new HttpParams().set('limit', '101').set('sort', 'rank').set('start', '1');
        this._http.get(this.getCryptocurrenciesUrl, {params: param}).pipe(map(resp => resp['data'])).subscribe(data => {
            console.log(data);
            this.topPairs = data;
            this.btcPrice = data['1']['quotes']['USD']['price'];
        });
    }

    getPriceForPairs(days: number) {
        this.currenciesTopData = [];
        for (const curr of Object.keys(this.topPairs)) {
            this.getPriceDataBittrex(this.topPairs, curr, days);
        }
    }

    getPriceDataBittrex(marketcapData: any, curr: string, days: number) {
        this.running++;
        this.bittrexService.getPriceData(marketcapData[curr].symbol, 'day').subscribe(data => {
            this.running--;
            if (!data) {
                this.getPriceDataBinance(marketcapData, curr, days);
            } else if (data[data.length - (1 + days)]){
                this.currenciesTopData.push(new CurrencyTop(marketcapData[curr].symbol, data[data.length - 1]['C'],
                    data[data.length - (1 + days)]['C'], marketcapData[curr]['quotes']['USD']['market_cap']));
            }
        })
    }

    getPriceDataBinance(marketcapData: any, curr: string, days: number) {
        this.running++;
        this.binanceService.getPriceData(marketcapData[curr].symbol, '1d').subscribe(data => {
            this.running--;
            if (data.code !== -1121 && data[data.length - (1 + days)]) {
                this.currenciesTopData.push(new CurrencyTop(marketcapData[curr].symbol, Number.parseFloat(data[data.length - 1][4]),
                    Number.parseFloat(data[data.length - (1 + days)][4]), marketcapData[curr]['quotes']['USD']['market_cap']));
            }
        });
    }

}
