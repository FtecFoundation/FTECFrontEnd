export class BehavioralData {
    [id: string]: BehavioralDataTrade;
}

class BehavioralDataTradeResult {
    analyzeDepth: string;
    symbol: string;
    price: number;
    baseVolume: number;
    operationDate: Date;
    buy: boolean;
    success: boolean;
    hash: string;
    operationId: string;
}

export class BehavioralDataTrade {
    results: BehavioralDataTradeResult[];
    stock: string;
}

export class BehavioralRequest {
    depth: string;
    minVolume: number;
    maxVolume: number;
    stock: string;
    operationType: string;

    constructor(depth: string, minVolume: number, maxVolume: number, stock: string, operationType: string) {
        this.depth = depth;
        this.maxVolume = maxVolume;
        this.minVolume = minVolume;
        this.stock = stock;
        this.operationType = operationType;
    }
}
