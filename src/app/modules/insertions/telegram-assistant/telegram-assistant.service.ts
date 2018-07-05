import {Injectable} from '@angular/core';
import {RestService} from '../../../core/services/rest.service';
import {catchError} from 'rxjs/operators/catchError';
import {Observable} from 'rxjs/Observable';
import {TelegramData} from '../../../core/models/telegram';
import {map} from 'rxjs/operators/map';

const TelegramUrls = {
    getTelegramData: 'modules/telegram/getTelegramData',
    getHash: 'modules/telegram/getHash'
};

@Injectable()
export class TelegramAssistantService extends RestService {

    getTelegramData(): Observable<TelegramData> {
        return this.get(TelegramUrls.getTelegramData).pipe(
            map(resp => resp.response.telegram_data),
            catchError(e => this.handleError(e)));
    }

    getHash(): Observable<string> {
        return this.get(TelegramUrls.getHash).pipe(
            map(resp => resp.response.hash),
            catchError(e => this.handleError(e)));
    }

}
