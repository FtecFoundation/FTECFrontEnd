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
    endPrice: number;
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

    constructor(userId: number, userName: string, userImage: string, userRating: AuthorRating, creationDate: Date, message: string) {
        this.userId = userId;
        this.userRating = userRating;
        this.userImage = userImage;
        this.userName = userName;
        this.creationDate = creationDate;
        this.message = message;
    }
}

export class TrpFilter {
    startDate?: Date;
    overdue?: boolean;
    minLikes?: number;
    stock?: string;
    pair?: string;
    price?: string;
}
