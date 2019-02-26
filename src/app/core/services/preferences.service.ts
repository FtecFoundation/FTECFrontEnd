import {Injectable} from '@angular/core';
import {Preferences} from '../models/preferences';
import {HttpClient} from '@angular/common/http';
import {catchError} from "rxjs/operators";

@Injectable()
export class PreferencesService {
    private preferencesObj: Preferences;

    constructor(private _http: HttpClient) {
        Preferences.prototype.prod = false;
        try {
            this._http.get('/api/properties/getPreferences').subscribe(
                value => {
                    this.preferencesObj = value as Preferences;
                    if (this.preferencesObj.botDomain && this.preferencesObj.botDomain !== 'FTEC_test_bot') Preferences.prototype.prod = true;
                }, (e) => {
                    this.preferencesObj = new Preferences();
                    catchError(e);
                }
            );
        }catch (e) {
            catchError(e);
        }

    }


    get preferences(): Preferences {
        return this.preferencesObj;
    }
}
