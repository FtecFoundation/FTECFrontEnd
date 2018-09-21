export class GlobalPriceRequest {
    stocks: string[];
    pairs: string[];
    volume: number;
    buy: boolean;

    constructor(stocks: string[], pairs: string[], volume: number, buy: boolean) {
        this.stocks = stocks;
        this.buy = buy;
        this.pairs = pairs;
        this.volume = volume;
    }

}

export class GlobalPriceResult {
    [pair: string]: GlobalPriceData;
}

class GlobalPricePairData {
    stock: string;
    price: number;
    percentOfSaving: number;
}

export class GlobalPriceData {
    opened: boolean = false;
    array: GlobalPricePairData[];
}