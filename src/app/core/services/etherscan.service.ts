import {ExternalService} from './external.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {catchError} from 'rxjs/operators/catchError';
import {Injectable} from '@angular/core';
import {PreferencesService} from './preferences.service';

@Injectable()
export class EtherscanService extends ExternalService {

    constructor(private preferences: PreferencesService, _http: HttpClient) {
        super(_http);
    }

    getBalance(address: string): Observable<number> {
        let params = new HttpParams();
        params = params.append('contractaddress', this.preferences.preferences.contractAddress);
        params = params.append('address', address);
        params = params.append('module', 'account');
        params = params.append('action', 'tokenbalance');
        params = params.append('tag', 'latest');
        return this.get('https://' + this.preferences.preferences.etherscanPrefix + 'etherscan.io/api', params).pipe(
            map(result => result.result),
            catchError(response => {
                console.log(response);
                return null;
            })
        );
    }
}
