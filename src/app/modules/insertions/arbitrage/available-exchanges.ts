export class AvailableExchanges {
    public static BitTrex: Stock = { name: 'Bittrex', nameToSend: 'BitTrex', arbitrageChosen: false};
    public static Binance: Stock = { name: 'Binance', nameToSend: 'Binance', arbitrageChosen: false};
    public static Poloniex: Stock = { name: 'Poloniex', nameToSend: 'Poloniex', arbitrageChosen: false};
    public static YObitNet: Stock = { name: 'Yobit', nameToSend: 'YObitNet', arbitrageChosen: false};
    public static Hitbtc: Stock = { name: 'Hitbtc', nameToSend: 'Hitbtc', arbitrageChosen: false};
    public static HuobiCom: Stock = { name: 'Huobi', nameToSend: 'HuobiCom', arbitrageChosen: false};
    public static Kraken: Stock = { name: 'Kraken', nameToSend: 'Kraken', arbitrageChosen: false};
    public static BitStamp: Stock = { name: 'Bitstamp', nameToSend: 'BitStamp', arbitrageChosen: false};

    public static availibleStocks: Stock[] = [AvailableExchanges.BitTrex, AvailableExchanges.Binance, AvailableExchanges.BitStamp,
        AvailableExchanges.Hitbtc, AvailableExchanges.HuobiCom, AvailableExchanges.Kraken, AvailableExchanges.Poloniex,
        AvailableExchanges.YObitNet];
}

export interface Stock {
    name: string;
    nameToSend: string;
    arbitrageChosen: boolean;
}
