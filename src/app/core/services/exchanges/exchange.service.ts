import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Candle, Pair} from "../../models/pair";

export interface ExchangeService {

    getPairs(): Observable<Pair[]>;

    // getCandles(): Observable<Candle[]>;
}


