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
