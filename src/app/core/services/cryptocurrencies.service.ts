import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class CryptocurrenciesService {

  getCryptocurrenciesUrl = 'https://api.coinmarketcap.com/v2/ticker/';

  constructor(private _http: HttpClient) {}

  getCryptocurrencies(): Observable<any> {
      const params = new HttpParams().set('limit', '5').set('sort', 'rank').set('start', '1');
      return this._http.get(this.getCryptocurrenciesUrl, {params: params});
  }

}
