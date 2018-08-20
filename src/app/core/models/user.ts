import { Stock, AvailableExchanges } from "../../modules/insertions/arbitrage/available-exchanges";

export class User {
    id: number;
    username: string;
    email: string;
    currentStep: string;
    twoStepVerification: boolean;
    subscribeForEmail: boolean;
    userRole: string;
    locale: string;
    imageName: string;
    confirmedEmail: boolean;
    balance: number;
    walletAddress: string;
    notificationSettings: NotificationSettings;
}

export class NotificationSettings{
    [type: number]: NotificationSetting;
}

export class NotificationSetting {
    notificationType: number;
    telegram: boolean;
    email: boolean;
    mobileApplication: boolean;
    sms: boolean;

    static from(notificationType: number, enabledNotifications: NotificationSetting): NotificationSetting {
        const setting = new NotificationSetting();
        setting.notificationType = notificationType;
        setting.email = enabledNotifications.email;
        setting.telegram = enabledNotifications.telegram;
        return setting;
    }
}

export class DashboardAuthLogs {
    date: string;
    device: string;
    remoteIp: string;
}

export class RegistrationData {
    username: string;
    email: string;
    locale: string;
    password: string;
    subscribeForEmail: boolean;
    referrerId: number;
    code: string;

    deserialize(formData: any, lang: string, referrerId: number): this {
        this.username = formData.username;
        this.email = formData.email;
        this.password = formData.passwordGroup.password;
        this.subscribeForEmail = formData.subscribeForEmail;
        this.locale = lang;
        this.referrerId = referrerId;
        this.code = formData.code;
        return this;
    }
}

export class ExchangeKeys {
    publicKey: string;
    privateKey: string;
    stock: Stock;
    savingDate: Date;

    public static of(privateKey: string, publicKey: string, stock: string, savingDate: Date): ExchangeKeys {
        const key = new ExchangeKeys();
        key.privateKey = privateKey;
        key.publicKey = publicKey;
        key.stock = AvailableExchanges.ofName(stock);
        key.savingDate = savingDate;
        return key;
    }
}
