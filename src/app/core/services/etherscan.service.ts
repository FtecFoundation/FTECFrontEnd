import {ExternalService} from './external.service';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {catchError} from 'rxjs/operators/catchError';
import {Injectable} from '@angular/core';

@Injectable()
export class EtherscanService extends ExternalService {
    contractAddress = '0xac1ec31a5d24d2ac84404e19734dd34a288450f3';
    // contractAddress = '0x6bec54e4fea5d541fb14de96993b8e11d81159b2';
    getBalance(address: string): Observable<number> {
        let params = new HttpParams();
        params = params.append('contractaddress', this.contractAddress);
        params = params.append('address', address);
        params = params.append('module', 'account');
        params = params.append('action', 'tokenbalance');
        params = params.append('tag', 'latest');
        return this.get('https://api-ropsten.etherscan.io/api', params).pipe(
            map(result => result.result),
            catchError(response => {
                console.log(response);
                return null;
            })
        );
    }
}
