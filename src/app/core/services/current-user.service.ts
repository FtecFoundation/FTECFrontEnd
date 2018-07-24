import {Injectable} from '@angular/core';
import {AccountService} from './account.service';
import {User} from '../models/user';
import {EtherscanService} from './etherscan.service';
import {map} from 'rxjs/operators/map';
import {Observable} from 'rxjs/Observable';
import {TelegramSettings} from '../models/telegram';
import {catchError} from 'rxjs/operators/catchError';
import {ErrorsService} from './errors-handling/errors.service';
import {CustomException} from '../models/exceptions';

@Injectable()
export class CurrentUserService {
    private currentUser: User;
    telegramSettings: TelegramSettings;
    constructor(private _accountService: AccountService, private _etherscanService: EtherscanService, private errorService: ErrorsService) {

    }

    getCurrentUser(): Observable<User> {
        if (this.currentUser) { return Observable.of(this.currentUser); }
        return this._accountService.getUser().pipe(
            map(data => {
                this.currentUser = data;
                if (!this.currentUser.walletAddress) {
                    this.currentUser.balance = 0;
                } else {
                    this._etherscanService.getBalance(this.currentUser.walletAddress).subscribe(balance => {
                        this.currentUser.balance = balance;
                    });
                }
                return this.currentUser;
            })
        );
    }

    get user(): User {
        return this.currentUser;
    }

    getTelegramSettingsObs(forceRefresh: boolean): Observable<TelegramSettings> {
        if (!forceRefresh && this.telegramSettings != null) { return Observable.of(this.telegramSettings); }
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

    refreshTelegramSettings() {
        return this._accountService.getTelegramSettings();
    }
    get tgSettings() {
        return this.telegramSettings;
    }

    checkAddressExistence() {
        if (!this.user.walletAddress) {
            this._accountService.getUserAddress().subscribe(value => this.user.walletAddress = value );
        }
    }
}
