import {Component, Input, OnInit} from '@angular/core';
import {SocialService} from '../../../core/services/social.service';
import {Router} from '@angular/router';
import {AvailableExchanges} from '../arbitrage/available-exchanges';
import {NewsBackgroundService} from "./news-background.service";
import {NewsBackgroundResults} from "../../../core/models/news-background";
import {CurrentUserService} from '../../../core/services/current-user.service';
import {NotificationService} from '../../account/notification/notification.service';


@Component({
    selector: 'app-social',
    templateUrl: './news-background.component.html',
    styleUrls: ['../insertions.scss', './news-background.component.scss']
})
export class NewsBackgroundComponent implements OnInit {

    daysLeft: any = 0;
    exchanges = AvailableExchanges;
    chosenCurrency: string;
    currencies: string[] = [];
    availableCurrencies: string[] = ['BTC', 'ETH', 'XRP', 'BCC', 'EOS', 'XLM', 'LTC', 'ADA', 'IOTA', 'TRX', 'NEO', 'ETC', 'BNB', 'VET'];
    results: NewsBackgroundResults[];

    pages: number[] = [];

    constructor(public _newsBackService: NewsBackgroundService,
                private router: Router,
                public _currentUserService: CurrentUserService,
                private _notificationService: NotificationService) {
    }


    ngOnInit() {
        this._newsBackService.getSettings().subscribe(data => {
            if (data.expirationDate) this.getDaysLeft(data.expirationDate);
            else this.daysLeft = 0;

            if (data.coins) this.currencies = data.coins;

            if (this.daysLeft) this._newsBackService.getResults(0).subscribe(data => {
                for (let i = 0; i < this._newsBackService.pagination.totalPages; i++) {
                    this.pages.push(i);
                }
                this.results = data;
            });
        });
    }

    public updateNotificationStatus(type: string){
        this._currentUserService.notificationSettings[9][type] = !this._currentUserService.notificationSettings[9][type];
        const toChange = this._currentUserService.notificationSettings[9];
        toChange.notificationType=3;
        this._notificationService.updateNotification(toChange).subscribe(data => console.log(data));
    }

    goToPage(page: number) {
        this._newsBackService.getResults(page).subscribe(data => {
            this.results = data;
        });
    }

    extractHostname(url: string): string {
        let hostname;
        if (url.indexOf("//") > -1) {
            hostname = url.split('/')[2];
        }
        else {
            hostname = url.split('/')[0];
        }

        hostname = hostname.split(':')[0];
        hostname = hostname.split('?')[0];

        return hostname;
    }

    extractRootDomain(url: string): string {
        let domain = this.extractHostname(url),
            splitArr = domain.split('.'),
            arrLen = splitArr.length;
        if (arrLen > 2) {
            domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
            if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
                domain = splitArr[arrLen - 3] + '.' + domain;
            }
        }
        return domain;
    }


    getDaysLeft(date: Date) {
        const today = new Date().getTime();
        const expirationDate = new Date(date).getTime();
        const difference = expirationDate - today;
        if (difference > 0) {
            this.daysLeft = Math.round(difference / (24 * 60 * 60 * 1000));
        } else {
            this.daysLeft = 0;
        }
    }

    deleteCurrency(currency: string) {
        this.currencies = this.currencies.filter(c => c !== currency);
        this._newsBackService.setCurrencies(this.currencies).subscribe(data => {
            this._newsBackService.getResults().subscribe(res => this.results = res);
        });
    }

    renewSubscription() {
        this._newsBackService.subscribe().subscribe(data => {
            this.getDaysLeft(data);
        });
    }

    addCurrency(currency: string) {
        if (this.daysLeft && this.currencies.indexOf(currency.toLowerCase()) === -1) {
            this.currencies.push(currency.toLowerCase());
            this._newsBackService.setCurrencies(this.currencies).subscribe(data => {
                this._newsBackService.getResults().subscribe(res => this.results = res);
            });
        }
    }

    absolute(n: number): number {
        return Math.abs(n);
    }

    updateNews() {
        this._newsBackService.getUpdatedResults().subscribe(data => {
            this.results = data;
        })
    }

}
