class Referral {
    id: number;
    username: string;
    email: string;
    balance: number;
    creationDate: Date;
}

export class ReferralData {
    levelOne: Referral[];
    levelTwo: Referral[];
    levelThree: Referral[];
}