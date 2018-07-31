import {Stock} from '../../modules/insertions/arbitrage/available-exchanges';

export class ArbitrageWindow {
    pairName: string;
    stockToBuy: string;
    priceToBuy: number;
    stockToSell: string;
    priceToSell: number;
    lockedOnBuy: boolean;
    lockedOnSell: boolean;
    volumeOnBuy: number;
    volumeOnSell: number;
    profitPercent: number;
}

export class ArbitrageWindows {
    windows: ArbitrageWindow[];
}

export class ArbitrageWindowsLog {
    date: Date;
    logs: ArbitrageWindow[];
}

export class ArbitrageWindowRequest {
    minVolume: number;
    minPercent: number;
    orderVolume?: number;
    stocks: string[] = [];

    deserialize(formData: any, stocks: Stock[]): this {
        for (const stock of stocks) {
            this.stocks.push(stock.nameToSend);
        }
        this.minVolume = formData.minVolume;
        this.minPercent = formData.minPercent;
        if (formData.isOrderVolume) { this.orderVolume = formData.orderVolume; }

        return this;
    }
}
