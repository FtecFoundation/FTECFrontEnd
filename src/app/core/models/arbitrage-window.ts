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
    window: ArbitrageWindow[];
}

export class ArbitrageWindowsLog {
    date: Date;
    log: ArbitrageWindow[];
}

export class ArbitrageWindowRequest {
    minVolume: number;
    minPercent: number;
    orderVolume?: number;
    stocks: string[];

    deserialize(formData: any, stocks: string[]): this {
        this.stocks = stocks;
        this.minVolume = formData.minVolume;
        this.minPercent = formData.minPercent;
        if (formData.isOrderVolume) { this.orderVolume = formData.orderVolume; }

        return this;
    }
}
