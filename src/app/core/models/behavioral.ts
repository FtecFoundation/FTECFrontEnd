export class BehavioralDataTrades {
    operations: BehavioralDataOperations;
    statistics: BehavioralDataStatistics;
}

class BehavioralDataInfo {
    [stock: string]: BehavioralDataOperations[];
}

export class BehavioralDataOperations {
    id: string;
    userId: number;
    stock: string;
    pair: string;
    operationType: OperationTypes;
    closingDate: Date;
    price: number;
    bestPrice: number;
    divergence: number;
}

class BehavioralDataStatistics {
    [stock: string]: StockBehavioralData;
}

export class StockBehavioralData {

    constructor() {
        this.accuracy = 0;
        this.failedOrders = 0;
        this.panicBuy = 0;
        this.panicSell = 0;
        this.profitLoss = 0;
        this.successfulOrders = 0;
    }

    accuracy: number;
    failedOrders: number;
    panicBuy: number;
    panicSell: number;
    profitLoss: number;
    successfulOrders: number;
}

enum OperationTypes {
    Buy, Sell
}
