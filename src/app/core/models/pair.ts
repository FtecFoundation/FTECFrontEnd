import {Stock} from "../../modules/insertions/arbitrage/available-exchanges";

export class Pair {
    symbol: string;
    base: string;
    exchange: Stock;

    of(symbol: string, base: string, exchange: Stock): Pair {
        let pair = new Pair();
        pair.symbol = symbol;
        pair.base = base;
        pair.exchange = exchange;
        return pair;
    }
}

export class Candle {
    close: number;
    open: number;
    low: number;
    high: number;
    date: Date;
}