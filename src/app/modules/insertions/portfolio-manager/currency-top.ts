export class CurrencyTop {
    percentIncrease?: number;
    capitalization: number;
    price: number;
    currency: string;
    pticeThen: number;

    constructor (currency: string, price: number, priceThen: number, cap: number) {
        this.capitalization = cap;
        this.currency = currency;
        this.price = price;
        this.pticeThen = priceThen;
    }
}