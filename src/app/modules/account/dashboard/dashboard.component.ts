import { Component, Input, OnInit } from '@angular/core';
import { CryptocurrenciesService } from '../../../core/services/cryptocurrencies.service';
import { Cryptocurrency } from '../../../core/models/cryptocurrency';
import { ShowModalService } from '../../not-active/show-modal.service';
import { CurrentUserService } from '../../../core/services/current-user.service';
import { Router } from '@angular/router';
import { AccountService } from '../../../core/services/account.service';
import { DashboardAuthLogs, ExchangeKeys } from '../../../core/models/user';
import { MyExchangesComponent } from '../my-exchanges/my-exchanges.component';
import { MyExchangesService } from '../my-exchanges/my-exchanges.service';
import { AvailableExchanges, Stock } from '../../insertions/arbitrage/available-exchanges';
import {HitBTCService} from "../../../core/services/exchanges/hitbtc.service";
import {BinanceService} from "../../../core/services/exchanges/binance.service";
import {BittrexService} from "../../../core/services/exchanges/bittrex.service";


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {

    preloader = true;
    keys: ExchangeKeys[] = [];
    unusedExchanges: Stock[] = [];

    public authLogsContent = false;

    currencies: Cryptocurrency[] = [];
    logs: DashboardAuthLogs[] = [];

    constructor(private _cryptoService: CryptocurrenciesService,
        private _showModalService: ShowModalService,
        private router: Router,
        public _currentUserService: CurrentUserService,
        private _authLogs: AccountService,
        private _exchangesKeys: ExchangeKeys) {
    }

    ngOnInit() {
        this._currentUserService.getStockKeys(false).subscribe(data => {
            this.keys = data;
            main: for(const stock of AvailableExchanges.availableStocks) {
                for(const key of this.keys) {
                    if(key.stock == stock) continue main;
                }
                this.unusedExchanges.push(stock)
            }
        });

        this._cryptoService.getCryptocurrencies().subscribe(data => {
            for (const val of Object.values(data['data'])) {
                this.currencies.push(<Cryptocurrency>val);
            }
            this.preloader = false;
        });

        this._authLogs.getAuthLogs().subscribe(data => {
            this.logs = data;

            this.authLogsContent = true;
        });

    }


    showModal() {
        this._showModalService.showModal = true;
    }

    route() {
        this.router.navigate(['/account/my-exchanges']);
    }

    goToPaymentPage() {
        this._currentUserService.checkAddressExistence();
        this.router.navigateByUrl('/account/payment');
    }




}
