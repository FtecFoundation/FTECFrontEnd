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

export class PortfolioLogs {
    [time: number]: PortfolioLog;
}

export class PortfolioLog {
    capitalization: OldPortfolio;
}

export class OldPortfolio {
    [asset: string]: number;
}
