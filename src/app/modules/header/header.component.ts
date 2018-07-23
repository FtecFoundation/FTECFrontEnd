import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {Router} from '@angular/router';
import {TitlesService} from '../../core/services/titles.service';
import {ShowModalService} from '../not-active/show-modal.service';
import {User} from '../../core/models/user';
import {CurrentUserService} from '../../core/services/current-user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    user: User;
    @ViewChild('image') image: ElementRef;

    constructor(private _accountService: AccountService,
                private router: Router,
                public _titlesService: TitlesService,
                public _showModalService: ShowModalService,
                public _currentUserService: CurrentUserService) {
    }

    ngOnInit() {
        this._accountService.getUser().subscribe(data => {
            this.user = data;
        });
    }

    showUser() {
        const accInfo = document.querySelector('.user-account-block');

        accInfo.classList.toggle('is-active');
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

    logout() {
        this._accountService.logoutUser().subscribe(() => {
            this.router.navigate(['']);
        });
    }

    goToPaymentPage() {
        if (!this._currentUserService.user.walletAddress) {
            this._accountService.getUserAddress().subscribe(value => this._currentUserService.user.walletAddress = value );
        }
        this.router.navigateByUrl('/account/payment');
    }

    showModal() {
        this._showModalService.showModal = true;
    }

}
