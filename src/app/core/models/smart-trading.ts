export class SmartTradingPreferences {
    stock: string = 'Binance';
    maxTrade: number;
    bot: string;
    state: boolean;
}

export class SmartTradingData {
    date: Date;
    stock: string;
    pair: string;
    volume: number;
    profit: number;
    tradeType: string;
}

export class DisableBotPayload{
    stock: string;
    constructor(stock: string){
        this.stock = stock;
    }
}