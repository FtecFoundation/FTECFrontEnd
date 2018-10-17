import {Injectable} from '@angular/core';
import {BinanceService} from "./binance.service";
import {BittrexService} from "./bittrex.service";
import {HitBTCService} from "./hitbtc.service";
import {ExchangeService} from "./exchange.service";
import {PoloniexService} from "./poloniex.service";

@Injectable()
export class ExchangesService {
    exchanges: { [name: string]: ExchangeService };

    constructor(private binanceService: BinanceService, private bittrexService: BittrexService,
                private hitbtcService: HitBTCService, private poloniexService: PoloniexService) {
        this.exchanges = {
            'Binance': binanceService,
            'BitTrex': bittrexService,
            'Hitbtc': hitbtcService,
            'Poloniex': poloniexService
        };
    }

}
