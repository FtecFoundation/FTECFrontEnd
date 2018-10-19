import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {Router} from '@angular/router';
import {TitlesService} from '../../core/services/titles.service';
import {ShowModalService} from '../not-active/show-modal.service';
import {User} from '../../core/models/user';
import {CurrentUserService} from '../../core/services/current-user.service';
import {CookieService} from "ngx-cookie-service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss', '../layout/layout.component.scss']
})
export class HeaderComponent implements OnInit {
    @ViewChild('image') image: ElementRef;
    showDropdown: boolean = false;
    currencies: string[] = ['ETH', 'BTC', 'FTEC'];
    @Input() terms: boolean = false;

    constructor(private _accountService: AccountService,
                private router: Router,
                public _titlesService: TitlesService,
                public _showModalService: ShowModalService,
                public _currentUserService: CurrentUserService,
                public cookieService: CookieService) {
    }

    ngOnInit() {
    }

    otherCurrencies(): string[] {
        return this.currencies.filter(c => c !== this._currentUserService.user.currentPaymentScope);
    }

    closeDropdown() {
        if (this.showDropdown) this.showDropdown = false
    }

    showThemeList() {
        const themesBlock = document.querySelector('.aside');

        themesBlock.classList.toggle('is-active');
    }

    showSidebar() {
        const dropdown = document.querySelector('.dropdown-button'),
            sidebar = document.querySelector('.sidebar');

        dropdown.classList.toggle('is-active');
        sidebar.classList.toggle('is-active');
    }

    getAssetBalance(asset: string): number {
        return this._currentUserService.user.balances[asset.toLowerCase() + 'Balance'];
    }


    logout() {
        this._accountService.logoutUser().subscribe(() => {
            this.router.navigate(['']);
        });

        this._currentUserService.clearCache()
    }

    goToPaymentPage() {
        this.router.navigateByUrl('/account/payment');
    }

    showModal() {
        this._showModalService.showModal = true;
    }

}
