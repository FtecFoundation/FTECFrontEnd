export class PriceNotification {

    constructor(id: number, stock: string, pair: string, divergence: number, currentPrice: number) {
        this.id = id;
        this.stock = stock;
        this.pair = pair;
        this.divergence = divergence;
        this.currentPrice = currentPrice;
    }

    id: number;
    stock: string;
    pair: string;
    divergence: number;
    currentPrice: number;
}

export class PriceNotificationResponse {
    notifId: number;
    available: number;
}


export class PriceNotificationsData {
    notifications: PriceNotification[];
}