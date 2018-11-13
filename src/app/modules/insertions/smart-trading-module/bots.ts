export class Bot {
    name: string;
    strategy: string;
    currencyPairs: string;
    tradingTime: string;
    profitWeek: number;
    profitMonth: number;
    successRate: number;
    fails: number;
    accuracy: number;
    profit90: number;
    active: boolean = false;
    image: string;
    questionId: number;
}

export const Bots = [
    {
        "name": "Conservative",
        "strategy": "Bot checks 24 conditions and trades only when every single condition is true. Because of this, bot can skip some profitable situations but each trade is profitable with the highest probability.",
        "currencyPairs": "Any",
        "tradingTime": "30m, 2h, 4h",
        "profitWeek": 91,
        "profitMonth": 274,
        "profit90": 574,
        "successRate": 59,
        "fails": 66.292,
        "accuracy": 67.416,
        "active": false,
        "image": "bot1.png",
        "questionId": 14
    },
    {
        "name": "Balanced",
        "strategy": "Bot checks 24 conditions but depends on previous results can skip some false conditions. Because of this bot trades more often and gives more profit that 'Conservative bot'. But it has lower precision.",
        "currencyPairs": "Any",
        "tradingTime": "30m, 2h, 4h",
        "profitWeek": 102,
        "profitMonth": 306,
        "profit90": 642,
        "successRate": 60,
        "fails": 29,
        "accuracy": 67.416,
        "active": false,
        "image": "bot2.png",
        "questionId": 13
    },
    {
        "name": "Aggressive",
        "strategy": "Bot checks only 12 conditions. It allows to catch up with all profitable situations. This bot has the lowest precision but when trand rising it will give the most profit.",
        "currencyPairs": "Any",
        "tradingTime": "30m, 2h, 4h",
        "profitWeek": 106,
        "profitMonth": 321,
        "profit90": 651,
        "successRate": 60,
        "fails": 29,
        "accuracy": 67.416,
        "active": false,
        "image": "bot3.png",
        "questionId": 12
    }
];
