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
