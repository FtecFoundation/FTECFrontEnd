import {Injectable} from '@angular/core';
import {RestService} from "../../../core/services/rest.service";
import {VolumeAnalyzerPreferences} from "../../../core/models/volume-analizer";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

enum VolumeAnalyzerApiUrls {
    setPreferences = 'cabinet/analyzer/settings/setup',
    getLastPreferences = 'cabinet/analyzer/settings/actual',
    startBot = 'cabinet/analyzer/start',
    stopBot = 'cabinet/analyzer/stop',
    history = 'cabinet/analyzer/history'
}

@Injectable()
export class VolumeAnalyzerService extends RestService {

    constructor(_http: HttpClient, _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    setPreferences(preferences: VolumeAnalyzerPreferences): Observable<any> {
        return this.post(VolumeAnalyzerApiUrls.setPreferences, preferences);
    }

    startBot(): Observable<any> {
        return this.get(VolumeAnalyzerApiUrls.startBot);
    }

    stopBot(): Observable<any> {
        return this.get(VolumeAnalyzerApiUrls.stopBot);
    }

    getLastPreferences(): Observable<any> {
        return this.get(VolumeAnalyzerApiUrls.getLastPreferences);
    }

    getHistory(): Observable<any> {
        return this.get(VolumeAnalyzerApiUrls.history).pipe(map(resp => resp.response.analyze));
    }

}
