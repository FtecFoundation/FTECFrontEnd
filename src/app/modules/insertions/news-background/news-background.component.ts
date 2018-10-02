import {Component, Input, OnInit} from '@angular/core';
import {SocialService} from '../../../core/services/social.service';
import {Router} from '@angular/router';
import {AvailableExchanges} from '../arbitrage/available-exchanges';
import {NewsBackgroundService} from "./news-background.service";
import {NewsBackgroundResults} from "../../../core/models/news-background";


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


    constructor(private _newsBackService: NewsBackgroundService,
                private router: Router) {
    }


    ngOnInit() {
        this._newsBackService.getSettings().subscribe(data => {
            this.getDaysLeft(data.expirationDate);
            this.currencies = data.coins;

            if (this.daysLeft) this._newsBackService.getResults().subscribe(data => this.results = data);
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

    renewSubscription() {
        this._newsBackService.subscribe().subscribe(data => {
            this.getDaysLeft(data);
        });
    }

    addCurrency(currency: string) {
        this.currencies.push(currency.toLocaleLowerCase());
        this._newsBackService.setCurrencies(this.currencies).subscribe(data => {
            this.currencies = data;
        });
    }

}
