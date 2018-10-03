export class PortfolioPreferences {
    nature: string;
    btc: number;
    coinsCount: number;
    period: string;
}

export class Portfolio {
    [currency: string]: number;
}

export class PortfolioChart {
    name: string;
    value: number;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }
}