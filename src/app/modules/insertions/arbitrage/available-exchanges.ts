export class AvailableExchanges {
    public static BitTrex: Stock = {name: 'Bittrex', nameToSend: 'BitTrex', arbitrageChosen: false, imageURL: 'bittrex.png'};
    public static Binance: Stock = {name: 'Binance', nameToSend: 'Binance', arbitrageChosen: false, imageURL: 'binance.png'};
    public static Poloniex: Stock = {name: 'Poloniex', nameToSend: 'Poloniex', arbitrageChosen: false, imageURL: 'poloniex.png'};
    public static YObitNet: Stock = {name: 'Yobit', nameToSend: 'YObitNet', arbitrageChosen: false, imageURL: 'yo-bit.png'};
    public static Hitbtc: Stock = {name: 'Hitbtc', nameToSend: 'Hitbtc', arbitrageChosen: false, imageURL: 'HitBTC.png'};
    public static HuobiCom: Stock = {name: 'Huobi', nameToSend: 'HuobiCom', arbitrageChosen: false, imageURL: 'huobi.png'};
    public static Kraken: Stock = {name: 'Kraken', nameToSend: 'Kraken', arbitrageChosen: false, imageURL: 'kraken.png'};
    public static BitStamp: Stock = {name: 'Bitstamp', nameToSend: 'BitStamp', arbitrageChosen: false, imageURL: 'bitstamp.png'};

    public static availableStocks: Stock[] = [AvailableExchanges.BitTrex, AvailableExchanges.Binance, AvailableExchanges.BitStamp,
        AvailableExchanges.Hitbtc, AvailableExchanges.HuobiCom, AvailableExchanges.Kraken, AvailableExchanges.Poloniex,
        AvailableExchanges.YObitNet];

    public static availableTimeframes: Timeframe[] = [{symbol: '1m', name: '1 minute'}, {symbol: '5m', name: '5 minutes'},
        {symbol: '10m', name: '10 minutes'}, {symbol: '30m', name: '30 minutes'}, {symbol: '1h', name: '1 hour'},
        {symbol: '4h', name: '4 hours'}, {symbol: '1d', name: '1 day'}];

    static ofName(name: string): Stock {
        for (const stock of AvailableExchanges.availableStocks) {
            if (name === stock.nameToSend) { return stock; }
        }
        return null;
    }
}

export interface Stock {
    name: string;
    nameToSend: string;
    arbitrageChosen: boolean;
    imageURL: string;
}

export class Timeframe {
    symbol: string;
    name: string;
}