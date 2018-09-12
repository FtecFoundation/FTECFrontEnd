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

    public static availableTimeframes: Timeframe[] = [{symbol: 'oneMinute', name: '1 minute'}, {symbol: 'fiveMinutes', name: '5 minutes'},
        {symbol: 'tenMinutes', name: '10 minutes'}, {symbol: 'thirtyMinutes', name: '30 minutes'}, {symbol: 'oneHour', name: '1 hour'},
        {symbol: 'fourHours', name: '4 hours'}, {symbol: 'oneDay', name: '1 day'}];

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
    volumeAnalyzerChosen?: boolean;
    imageURL: string;
}

export class Timeframe {
    symbol: string;
    name: string;
}