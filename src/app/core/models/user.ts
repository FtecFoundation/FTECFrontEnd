export class User {
    username: string;
    email: string;
    currentStep: string;
    subscribeForEmail: boolean;
    userRole: string;
    locale: string;
    imageName: string;
    confirmedEmail: boolean;
    balance: number;
    walletAddress: string;
    notificationSettings: NotificationSetting;
}

export class NotificationSetting {
    notificationType: number;
    telegram: boolean;
    email: boolean;

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

    deserialize(formData: any, lang: string): this {
        this.username = formData.username;
        this.email = formData.email;
        this.password = formData.passwordGroup.password;
        this.subscribeForEmail = formData.subscribeForEmail;
        this.locale = lang;
        return this;
    }
}

export class ExchangeKeys {
    publicKey: string;
    privateKey: string;
    stock: string;
    savingDate: Date;

    public static of(privateKey: string, publicKey: string, stock: string, savingDate: Date): ExchangeKeys {
        const key = new ExchangeKeys();
        key.privateKey = privateKey;
        key.publicKey = publicKey;
        key.stock = stock;
        key.savingDate = savingDate;
        return key;
    }
}
