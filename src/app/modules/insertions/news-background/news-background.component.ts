import {Component, Input, OnInit} from '@angular/core';
import {SocialService} from '../../../core/services/social.service';
import {Router} from '@angular/router';
import {AvailableExchanges} from '../arbitrage/available-exchanges';
import {NewsBackgroundService} from "./news-background.service";
import {NewsBackgroundResults} from "../../../core/models/news-background";
import {CurrentUserService} from '../../../core/services/current-user.service';
import {NotificationService} from '../../account/notification/notification.service';
import {NotifyService} from "../../../core/notify/notify.service";
import {Notify} from "../../../core/notify/notifications";


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
    preloader: boolean = false;

    pages: number[] = [];
    howTo: string[] = ['Procedure is forming  a dataset including meaningful information from the news of the profile media and the subsequent dynamics of the market.',
    'The collected dataset is randomly divided into training and test samples. There are  to be training and efficiency check-up processes of LSTM-neural network.',
    'The cycle repeats until the optimal set of parameters is found, including the number of training epochs, deep neurons and the value of the training coefficient.',
    'The trained neural network with the chosen effective architecture expecting real-time pending new information messages from a separate "web spider" who follows the ribbons of selected authoritative media. After evaluating the news, the algorithm makes a forecast regarding the future situation on the market, a probabilistic estimate of the forecast and sends it to the trader.',
    'The user is guided by the projection of the neural network trading solution for the market.'];

    constructor(public _newsBackService: NewsBackgroundService,
                private router: Router,
                public _currentUserService: CurrentUserService,
                private _notificationService: NotificationService,
                private notifyService: NotifyService) {
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
        this._notificationService.updateNotification(toChange).subscribe();
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
            this._newsBackService.getResults(0).subscribe(res => this.results = res);
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
        this.preloader = true;
        this._newsBackService.getUpdatedResults().subscribe(data => {

            this.notifyService.addNotification(new Notify(this.notifyService.lastId, 'Success!',
                'The results of analyzer was updated', 'success'));
            this.preloader = false;
            this.results = data;
        }, error1 => this.preloader = false);
    }

}
