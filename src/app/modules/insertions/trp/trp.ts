export class CreateRecommendationData {
    pair: string;
    stock: string;
    price: number;
    type: string;
    period: string;
    title: string;
    content: string;
    predictChange: number;
}

export class TradingRecommendation {
    pair: string;
    stock: string;
    price: number;
    type: string;
    period: string;
    title: string;
    content: string;
    creationDate: Date;
    endDate: Date;
    predictChange: number;
    creationPrice: number;
    status: string;
}