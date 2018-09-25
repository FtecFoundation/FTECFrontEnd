import {Stock} from "../../modules/insertions/arbitrage/available-exchanges";

export class VolumeAnalyzerPreferences {
    stocks: string[] = [];
    basePair: string;
    minVolume: number;
    rate: number;
    timeframe: string;

    deserialize(formData: any, stocks: Stock[]): this {
        for (const stock of stocks) {
            this.stocks.push(stock.nameToSend);
        }
        this.minVolume = formData.minVolume;
        this.basePair = formData.basePair;
        this.rate = formData.rate;
        this.timeframe = formData.timeframe;

        return this;
    }
}

export class VolumeAnalyzerData {
    rate: number;
    stocks: string[];
    volumePre: number;
    volumeAfter: number;
    price: number;
    pair: string;
    creationDate: Date;
    timeframe: string;
}