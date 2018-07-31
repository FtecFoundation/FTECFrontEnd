import { Component, Input, OnInit } from '@angular/core';
import { CryptocurrenciesService } from '../../../core/services/cryptocurrencies.service';
import { Cryptocurrency } from '../../../core/models/cryptocurrency';
import { ShowModalService } from '../../not-active/show-modal.service';
import {CurrentUserService} from '../../../core/services/current-user.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {

    preloader = true;

    currencies: Cryptocurrency[] = [];

    constructor(private _cryptoService: CryptocurrenciesService,
        private _showModalService: ShowModalService,
        private router: Router,
        public _currentUserService: CurrentUserService) {
    }

    ngOnInit() {
        this._cryptoService.getCryptocurrencies().subscribe(data => {
            for (const val of Object.values(data['data'])) {
                this.currencies.push(<Cryptocurrency>val);
            }
            this.preloader = false;
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
