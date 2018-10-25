import {Injectable} from '@angular/core';
import {RestService} from '../../../core/services/rest.service';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SettingsService extends RestService{

    constructor(_http: HttpClient, _cookieService: CookieService){
        super(_http, _cookieService);
    }
    public changeEmail(email: string): Observable<any>{
        return this.post('/account/changeUserSetting', {email: email});
    }

    public changePassword(currentPassword: string, newPassword: string): Observable<any>{
        return this.post('/account/changeUserSetting', {currentPassword: currentPassword, password: newPassword})
    }
}