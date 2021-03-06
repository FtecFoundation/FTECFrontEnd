import {Injectable} from '@angular/core';
import {AccountService} from './account.service';
import {ExchangeKeys, NotificationSetting, NotificationSettings, RegistrationData, User} from '../models/user';
import {EtherscanService} from './etherscan.service';
import {map} from 'rxjs/operators/map';
import {Observable} from 'rxjs/Observable';
import {TelegramSettings} from '../models/telegram';
import {catchError} from 'rxjs/operators/catchError';
import {ErrorsService} from './errors-handling/errors.service';
import {CustomException} from '../models/exceptions';
import { TestHistory } from '../models/test-cryptoacademy';
import { ArbitrageWindow } from '../models/arbitrage-window';
import {PaymentService} from "./payment.service";
import {BehavioralData} from "../models/behavioral";

@Injectable()
export class CurrentUserService {
    private currentUser: User;
    private telegramSettings: TelegramSettings;
    private installedKeys: ExchangeKeys[];

    private registrationData: RegistrationData;
    private notificationsData: NotificationSetting;
    private testsData: TestHistory;
    private arbitrageData: ArbitrageWindow;

    constructor(private _accountService: AccountService, private _paymentService: PaymentService, private errorService: ErrorsService) {

    }

    clearCache() {
        this.currentUser = null;
        this.installedKeys = null;
        this.telegramSettings = null;
        this.registrationData = null;
        this.notificationsData = null;
        this.testsData = null;
        this.arbitrageData = null;
    }

    getCurrentUser(): Observable<User> {
        if (this.currentUser) { return Observable.of(this.currentUser); }
        return this._accountService.getUser().pipe(
            map(data => {
                this.currentUser = data;
                this._paymentService.getBalances().subscribe(bal => this.currentUser.balances = bal);
                return this.currentUser;
            })
        );
    }

    get user(): User {
        return this.currentUser;
    }

    getTelegramSettingsObs(forceRefresh: boolean): Observable<TelegramSettings> {
        if (!forceRefresh && !this.telegramSettings) { return Observable.of(this.telegramSettings); }
        return this._accountService.getTelegramSettings().pipe(
            map(value => this.telegramSettings = value),
            catchError(err => {
                if (err instanceof CustomException) { if (!this.errorService.handleCustomException(err)) { return; } }
                this.telegramSettings = new TelegramSettings();
                this._accountService.getTelegramHash().subscribe(hash => this.telegramSettings.accessCode = hash);
                return Observable.of(this.telegramSettings);
            })
        );
    }

    getNotificationSettings(forceRefresh: boolean): Observable<NotificationSettings> {
        if (!forceRefresh && !this.currentUser && !this.currentUser.notificationSettings) { return Observable.of(this.currentUser.notificationSettings); }
        this._accountService.getNotificationSettings().pipe(
            map(value => {
                this.user.notificationSettings = value
            }),
            catchError(err => {
                if (err instanceof CustomException) { if (!this.errorService.handleCustomException(err)) { return; } }
                console.error('Can\'t get notifications settings, got exception:', err);
                return Observable.throw(err);
            })
        );
    }

    get tgSettings() {
        return this.telegramSettings;
    }

    get notificationSettings() {
        return this.user.notificationSettings;
    }

    getStockKeys(forceRefresh: boolean): Observable<ExchangeKeys[]> {
        if (!forceRefresh && this.installedKeys) { return Observable.of(this.installedKeys); }
        return this._accountService.getInstalledKeys().pipe(
            map(data => {
                this.installedKeys = [];
                for(const key of data) {
                    this.installedKeys.push(ExchangeKeys.of(key.privateKey, key.publicKey, key.stock, key.savingDate));
                }
                return this.installedKeys})
        );
    }

    get apiKeys(): ExchangeKeys[] {
        return this.installedKeys;
    }

    addStockKey(privateKey: string, publicKey: string, stock: string) {
        if (!this.installedKeys) { this.installedKeys = []; }
        this.installedKeys.push(ExchangeKeys.of(privateKey, publicKey, stock, new Date()));
    }

    removeStockKey(stock: ExchangeKeys) {
        if (!this.installedKeys) { this.installedKeys = []; }
        this.installedKeys.splice(this.installedKeys.indexOf(stock), 1);
    }

}
