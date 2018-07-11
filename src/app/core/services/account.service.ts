import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators/tap';
import {catchError} from 'rxjs/operators/catchError';

import {RestService} from './rest.service';
import {HttpParams} from '@angular/common/http';
import {User} from '../models/user';
import {map} from 'rxjs/operators/map';

enum AccountApiUrls {
    login = 'login',
    logout = 'logout',
    register = 'registration',
    checkEmail = 'checkUniqueEmail',
    checkUsername = 'checkUniqueLogin?login=',
    checkIfAuthorized = 'cabinet/tutorial/getCurrentStep',
    restorePassword = 'sendRestoreUrl',
    confirmEmail = 'confirmEmail/',
    getUser = 'cabinet/getUser',
    resendEmail = 'cabinet/resendConfirmation'
}

@Injectable()
export class AccountService extends RestService {

    isAuthorized(): Observable<any> {
        return this.get(AccountApiUrls.checkIfAuthorized).pipe(
            catchError(e => this.handleError(e)));
    }

    resendEmail(): Observable<any> {
        return this.get(AccountApiUrls.resendEmail).pipe(
            tap(resp => console.log(resp)),
            catchError(e => this.handleError(e)));
    }

    loginUser(data: any): Observable<any> {
        return this.post(AccountApiUrls.login, data).pipe(
            tap(resp => this.processLogin(resp.response.token)),
            catchError(e => this.handleError(e)));
    }

    logoutUser(): Observable<any> {
        return this.post(AccountApiUrls.logout, {}).pipe(
            tap(() => this.processLogout()),
            catchError(e => this.handleError(e)));
    }

    registerUser(data: any): Observable<any> {
        return this.post(AccountApiUrls.register, data).pipe(
            tap(resp => this.processLogin(resp.response.token)),
            catchError(e => this.handleError(e)));
    }

    restorePassword(data: string): Observable<any> {
        return this.post(AccountApiUrls.restorePassword, data).pipe(
            catchError(e => this.handleError(e)));
    }

    checkEmailNotTaken(email: string): Observable<any> {
        const param = new HttpParams().set('email', email);
        return this.get(AccountApiUrls.checkEmail, param).pipe(
            tap(resp => console.log(resp)),
            catchError(e => this.handleError(e)));
    }

    checkUsernameNotTaken(username: string): Observable<any> {
        return this.get(AccountApiUrls.checkUsername + username).pipe(
            tap(resp => console.log(resp)),
            catchError(e => this.handleError(e)));
    }

    confirmEmail(hash: string): Observable<any> {
        return this.post(AccountApiUrls.confirmEmail + hash, {}).pipe(
            catchError(e => this.handleError(e)));
    }

    getUser(): Observable<User> {
        return this.get(AccountApiUrls.getUser).pipe(
            map(resp => resp.response.user),
            catchError(e => this.handleError(e)));
    }
}

