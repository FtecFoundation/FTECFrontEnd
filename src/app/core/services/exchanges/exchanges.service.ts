import {Injectable} from '@angular/core';
import {BinanceService} from "./binance.service";
import {BittrexService} from "./bittrex.service";
import {HitBTCService} from "./hitbtc.service";
import {ExchangeService} from "./exchange.service";
import {PoloniexService} from "./poloniex.service";
import {HuobiService} from "./huobi.service";
import {YobitService} from "./yobit.service";
import {KrakenService} from "./kraken.service";
import {BitstampService} from "./bitstamp.service";

@Injectable()
export class ExchangesService {
    exchanges: { [name: string]: ExchangeService };
    arbitrageExchanges: { [name: string]: ExchangeService };

    constructor(private binanceService: BinanceService, private bittrexService: BittrexService,
                private hitbtcService: HitBTCService, private poloniexService: PoloniexService,
                private huobiService: HuobiService, private yobitService: YobitService,
                private krakenService: KrakenService, private bitstampService: BitstampService) {
        this.exchanges = {
            'Binance': binanceService,
            'BitTrex': bittrexService,
            'Hitbtc': hitbtcService,
            'Poloniex': poloniexService
        };

        this.arbitrageExchanges = {
            'Binance': binanceService,
            'BitTrex': bittrexService,
            'Hitbtc': hitbtcService,
            'Poloniex': poloniexService,
            'HuobiCom': huobiService,
            'YObitNet': yobitService,
            'Kraken': krakenService,
            'BitStamp': bitstampService
        };
    }

}
