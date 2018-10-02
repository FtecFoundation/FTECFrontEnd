import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from "rxjs/operators";
import {CurrencyTop} from "../../modules/insertions/portfolio-manager/currency-top";
import {BinanceService} from "./exchanges/binance.service";
import {BittrexService} from "./exchanges/bittrex.service";

@Injectable()
export class CryptocurrenciesService {

    getCryptocurrenciesUrl = 'https://api.coinmarketcap.com/v2/ticker/';
    now = new Date().getTime();
    currenciesTopData: CurrencyTop[] = [];

    constructor(private _http: HttpClient, private binanceService: BinanceService, private bittrexService: BittrexService) {
    }

    getCryptocurrencies(): Observable<any> {
        const params = new HttpParams().set('limit', '5').set('sort', 'rank').set('start', '1');
        return this._http.get(this.getCryptocurrenciesUrl, {params: params});
    }

    getCryptocurrenciesTop(days: number) {
        const params = new HttpParams().set('limit', '100').set('sort', 'rank').set('start', '2');
        this._http.get(this.getCryptocurrenciesUrl, {params: params}).pipe(map(resp => resp['data'])).subscribe(data => {
            for (const curr of Object.keys(data)) {
                this.getPriceDataBittrex(data, curr, days);
            }
        });
    }

    getPriceDataBittrex(marketcapData: any, curr: string, days: number) {
        this.bittrexService.getPriceData(marketcapData[curr].symbol, 'day').subscribe(data => {
            if (!data) {
                this.getPriceDataBinance(marketcapData, curr, days);
            } else {
                this.currenciesTopData.push(new CurrencyTop(marketcapData[curr].symbol, data[data.length - 1]['C'],
                    data[data.length - (1 + days)]['C'], marketcapData[curr]['quotes']['USD']['market_cap']));
                console.log(this.currenciesTopData);
            }
        })
    }

    getPriceDataBinance(marketcapData: any, curr: string, days: number) {
        this.binanceService.getPriceData(marketcapData[curr].symbol, '1d').subscribe(data => {
            if (data.code !== -1121) {
                this.currenciesTopData.push(new CurrencyTop(marketcapData[curr].symbol, Number.parseFloat(data[data.length - 1][4]),
                    Number.parseFloat(data[data.length - (1 + days)][4]), marketcapData[curr]['quotes']['USD']['market_cap']));
                console.log(this.currenciesTopData);
            }
        });
    }

}
