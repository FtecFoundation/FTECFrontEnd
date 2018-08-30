import {Injectable} from '@angular/core';
import {Preferences} from '../models/preferences';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PreferencesService {
    private preferencesObj: Preferences;

    constructor(private _http: HttpClient) {
        this._http.get('/api/properties/getPreferences').subscribe(
            value => {
                this.preferencesObj = value as Preferences;
                if (this.preferencesObj.botDomain === 'FTEC_test_bot') this.preferencesObj.prod = true;
            }, () => this.preferencesObj = new Preferences()
        );
    }


    get preferences(): Preferences {
        return this.preferencesObj;
    }
}
