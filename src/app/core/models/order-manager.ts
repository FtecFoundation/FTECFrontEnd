export class OrderManagerResponse {
    orderId: number;
    available: number;
}

export class Order {

    constructor(id: number, pair: string, stock: string, divergence: number, amount: number, currentPrice: number, type: string) {
        this.id = id;
        this.amount = amount;
        this.currentPrice = currentPrice;
        this.pair = pair;
        this.divergence = divergence;
        this.type = type;
        this.stock = stock;
    }

    id: number;
    pair: string;
    stock: string;
    divergence: number;
    amount: number;
    currentPrice: number;
    type: string;
}