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
    btc: number;
    nature: string;
    period: string;
    coinsCount: number;
}

export class PortfolioInfo {
    btc: number;
    nature: string;
    period: string;
    coinsCount: number;
    date: string;

    constructor(date: string, btc: number, nature: string, period: string, coinsCount: number) {
        this.btc = btc;
        this.date = date;
        this.nature = nature;
        this.period = period;
        this.coinsCount = coinsCount;
    }
}

export class OldPortfolio {
    [asset: string]: number;
}
