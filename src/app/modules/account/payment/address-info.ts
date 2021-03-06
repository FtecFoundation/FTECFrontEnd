export class AddressInfo {
    paymentScope: string;
    address: string;
    showQR: boolean = false;

    constructor(asset: string, address: string) {
        this.paymentScope = asset;
        this.address = address;
    }
}

export class PaymentHistory {
    asset: string;
    date: Date;
    amount: number;
    reason: string;
}