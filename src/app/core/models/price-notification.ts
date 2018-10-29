export class PriceNotification {

    constructor(id: number, stock: string, pair: string, divergence: number,
                currentPrice: number, sms: boolean, telegram: boolean, email: boolean, web: boolean) {
        this.id = id;
        this.stock = stock;
        this.pair = pair;
        this.divergence = divergence;
        this.currentPrice = currentPrice;
        this.smsNotification = sms;
        this.telegramNotification = telegram;
        this.emailNotification = email;
        this.webNotification = web;
    }

    id: number;
    stock: string;
    pair: string;
    divergence: number;
    currentPrice: number;
    smsNotification: boolean;
    telegramNotification: boolean;
    emailNotification: boolean;
    webNotification: boolean;
    creationDate: Date;
    triggerDate: Date;
    triggeredPrice: number;
}

export class PriceNotificationResponse {
    notifId: number;
    available: number;
}


export class PriceNotificationsData {
    notifications: PriceNotification[];
}
