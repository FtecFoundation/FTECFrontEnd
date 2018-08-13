import {Injectable} from '@angular/core';
import {BinanceService} from "./binance.service";
import {BittrexService} from "./bittrex.service";
import {HitBTCService} from "./hitbtc.service";
import {ExchangeService} from "./exchange.service";

@Injectable()
export class ExchangesService {
    exchanges: { [name: string]: ExchangeService };

    constructor(private binanceService: BinanceService, private bittrexService: BittrexService,
                private hitbtcService: HitBTCService) {
        this.exchanges = {
            'Binance': binanceService,
            'Bittrex': bittrexService,
            'Hitbtc': hitbtcService
        };
    }

}
