export class Cryptocurrency {
    id: number;
    name: string;
    symbol: string;
    website_slug: string;
    total_supply: string;
    quotes: Quote;
}

class Quote {
    USD: MarketData;
}

class MarketData {
    price: number;
    volume_24h: number;
    market_cap: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
}
