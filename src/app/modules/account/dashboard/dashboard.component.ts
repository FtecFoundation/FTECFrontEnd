import { Component, Input, OnInit } from '@angular/core';
import { CryptocurrenciesService } from '../../../core/services/cryptocurrencies.service';
import { Cryptocurrency } from '../../../core/models/cryptocurrency';
import { ShowModalService } from '../../not-active/show-modal.service';
import { CurrentUserService } from '../../../core/services/current-user.service';
import { Router } from '@angular/router';
import { AccountService } from '../../../core/services/account.service';
import {DashboardAuthLogs, ExchangeKeys, ModuleLog} from '../../../core/models/user';
import { AvailableExchanges, Stock } from '../../insertions/arbitrage/available-exchanges';
import {NotificationService} from '../notification/notification.service';
import {AllModules} from "../../../constants";


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {

    modules = AllModules;
    preloader = true;
    keys: ExchangeKeys[] = [];
    unusedExchanges: Stock[] = [];

    public authLogsContent = false;

    currencies: Cryptocurrency[] = [];
    logs: DashboardAuthLogs[] = [];

    moduleLogs: ModuleLog[];

    constructor(private _cryptoService: CryptocurrenciesService,
        private _showModalService: ShowModalService,
        private router: Router,
        public _currentUserService: CurrentUserService,
        private _authLogs: AccountService,
        private _notificationService: NotificationService,
        private _exchangesKeys: ExchangeKeys,
                private _accountService: AccountService) {
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

        this._cryptoService.getCryptocurrencies(5).subscribe(data => {
            for (const val of Object.values(data)) {
                this.currencies.push(<Cryptocurrency>val);
            }
            this.preloader = false;
        });

        this._authLogs.getAuthLogs().subscribe(data => {
            this.logs = data;

            this.authLogsContent = true;
        });

        this._accountService.getModulesLogs().subscribe(data => this.moduleLogs = data);

    }

    changeMode(method: string) {
        this._currentUserService.user.notificationSettings[0][method] = !this._currentUserService.user.notificationSettings[0][method];
        this._notificationService.updateMode(this._currentUserService.user.notificationSettings[0]).subscribe(() => {
        });
    }


    showModal() {
        this._showModalService.showModal = true;
    }
    getAssetBalance(asset: string): number {
        return this._currentUserService.user.balances[asset.toLowerCase() + 'Balance'];
    }
    route() {
        this.router.navigate(['/account/my-exchanges']);
    }

    goToPaymentPage() {
        this._currentUserService.checkAddressExistence();
        this.router.navigateByUrl('/account/payment');
    }




}
