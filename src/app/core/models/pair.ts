import {Stock} from "../../modules/insertions/arbitrage/available-exchanges";

export class Pair {
    symbol: string;
    base: string;
    exchange?: Stock;

    of(symbol: string, base: string, exchange?: Stock): Pair {
        let pair = new Pair();
        pair.symbol = symbol;
        pair.base = base;
        pair.exchange = exchange;
        return pair;
    }

    encodeForExchange(exchange: string): string {
        switch (exchange) {
            case 'Poloniex':
                return `${this.base}_${this.symbol}`;
            case 'YObitNet':
                return `${this.symbol.toLowerCase()}_${this.base.toLowerCase()}`;
            case 'Hitbtc':
                return this.symbol + this.base;
            case 'Binance':
                return this.symbol + this.base;
            case 'BitTrex':
                return `${this.base}-${this.symbol}`;
        }
    }
}

export class Candle {
    close: number;
    open: number;
    low: number;
    high: number;
    date: Date;
}
