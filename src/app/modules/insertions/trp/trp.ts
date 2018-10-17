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

export class AuthorRating {
    rating: number;
    increased: boolean;
}

export class TradingRecommendation {
    id: number;
    userId: number;
    userName: string;
    image: string;
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
    priceIncrease?: number;
    rating?: AuthorRating;
    subscribed: boolean;
}

export class TrpComment {
    userId: number;
    userName: string;
    userImage: string;
    userRating: AuthorRating;
    creationDate: Date;
    message: string;
}

export class TrpFilter {
    startDate?: Date;
    overdue?: boolean;
    minLikes?: number;
    price?: number;
    stock?: string;
    pair?: string;
}
