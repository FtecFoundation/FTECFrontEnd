import { Component, Input, OnInit } from '@angular/core';
import { CryptocurrenciesService } from '../../../core/services/cryptocurrencies.service';
import { Cryptocurrency } from '../../../core/models/cryptocurrency';
import { ShowModalService } from '../../not-active/show-modal.service';
import { CurrentUserService } from '../../../core/services/current-user.service';
import { Router } from '@angular/router';
import { AccountService } from '../../../core/services/account.service';
import { DashboardAuthLogs } from '../../../core/models/user';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {

    preloader = true;

    public authLogsContent = false;

    currencies: Cryptocurrency[] = [];
    logs: DashboardAuthLogs[] = [];

    constructor(private _cryptoService: CryptocurrenciesService,
        private _showModalService: ShowModalService,
        private router: Router,
        public _currentUserService: CurrentUserService,
        private _authLogs: AccountService) {
    }

    ngOnInit() {
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

    goToPaymentPage() {
        this._currentUserService.checkAddressExistence();
        this.router.navigateByUrl('/account/payment');
    }

}
