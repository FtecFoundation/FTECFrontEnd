import { Injectable } from '@angular/core';
import {RestService} from '../../../core/services/rest.service';
import {catchError} from 'rxjs/operators/catchError';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {BehavioralDataTrades} from '../../../core/models/behavioral';

const BehavioralApiUrls = {
  getTrades: 'cabinet/behavior/getTrades',
  saveKeys: 'apiKeys'
}

@Injectable()
export class BehavioralAnalyzerService extends RestService{

  getTrades(): Observable<any> {
    return this.post(BehavioralApiUrls.getTrades, {"stocks" : ["BitTrex"]}).pipe(
      map(resp => resp.response.operations));
  }

  saveKeys(): Observable<any> {
    return this.post(BehavioralApiUrls.saveKeys, {}).pipe(
      map(resp => resp.response.apiKeys));
  }

}

