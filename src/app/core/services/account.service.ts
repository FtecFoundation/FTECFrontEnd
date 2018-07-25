import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators/tap';
import {catchError} from 'rxjs/operators/catchError';

import {RestService} from './rest.service';
import {HttpParams} from '@angular/common/http';
import {NotificationSetting, User} from '../models/user';
import {map} from 'rxjs/operators/map';

enum AccountApiUrls {
    login = 'login',
    logout = 'logout',
    register = 'registration',
    checkEmail = 'checkUniqueEmail',
    checkUsername = 'checkUniqueLogin?login=',
    restorePassword = 'sendRestoreUrl',
    setNewPassword = '/restorePassword',
    confirmEmail = 'confirmEmail/',
    getUser = 'cabinet/getUser',
    resendEmail = 'cabinet/resendConfirmation',
    tgSettings = 'modules/telegram/getTelegramData',
    tgHash = 'modules/telegram/getHash',
    getAddress = 'cabinet/node/getAddress',
    getNotificationSettings = 'cabinet/notifications/getNotificationSettings'
}

@Injectable()
export class AccountService extends RestService {

    isAuthorized(): Observable<any> {
        return this.get(AccountApiUrls.getUser);
    }

    resendEmail(): Observable<any> {
        return this.post(AccountApiUrls.resendEmail, {});
    }

    loginUser(data: any): Observable<any> {
        return this.post(AccountApiUrls.login, data).pipe(
            tap(resp => this.processLogin(resp.response.token)));
    }

    logoutUser(): Observable<any> {
        return this.post(AccountApiUrls.logout, {}).pipe(
            tap(() => this.processLogout()));
    }

    registerUser(data: any): Observable<any> {
        return this.post(AccountApiUrls.register, data).pipe(
            tap(resp => this.processLogin(resp.response.token)));
    }

    restorePassword(data: string): Observable<any> {
        return this.post(AccountApiUrls.restorePassword, data);
    }

    setNewPassword(hash: string, password: string): Observable<any> {
        const data = {};
        data['hash'] = hash;
        data['newPath'] = password;
        return this.post(AccountApiUrls.setNewPassword, data);
    }

    checkEmailNotTaken(email: string): Observable<any> {
        const param = new HttpParams().set('email', email);
        return this.get(AccountApiUrls.checkEmail, param);
    }

    checkUsernameNotTaken(username: string): Observable<any> {
        return this.get(AccountApiUrls.checkUsername + username);
    }

    confirmEmail(hash: string): Observable<any> {
        return this.post(AccountApiUrls.confirmEmail + hash, {});
    }

    getUser(): Observable<User> {
        return this.get(AccountApiUrls.getUser).pipe(
            map(resp => resp.response.user));
    }

    getTelegramSettings(): Observable<any> {
        return this.get(AccountApiUrls.tgSettings).pipe(
            map(resp => {
                return resp.response.telegram_data;
            }),
            catchError(e => this.handleError(e)));
    }

    getTelegramHash(): Observable<string> {
        return this.get(AccountApiUrls.tgHash).pipe(
            map(resp => resp.response.hash),
            catchError(e => this.handleError(e)));
    }

    getUserAddress(): Observable<string> {
        return this.get(AccountApiUrls.getAddress).pipe(
            map(resp => resp.response.address)
        );
    }

    getNotificationSettings(): Observable<NotificationSetting> {
        return this.get(AccountApiUrls.getNotificationSettings).pipe(
            map(resp => resp.response.settings)
        );
    }
}

