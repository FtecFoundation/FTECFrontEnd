import {Component, Input, OnInit} from '@angular/core';
import {AvailableExchanges} from '../arbitrage/available-exchanges';
import {Pair} from "../../../core/models/pair";
import {CryptocurrenciesService} from "../../../core/services/cryptocurrencies.service";
import {CurrencyTop} from "./currency-top";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PortfolioManagerService} from "./portfolio-manager.service";
import {Portfolio, PortfolioChart, PortfolioPreferences} from "./portfolio";
import {NotifyService} from "../../../core/notify/notify.service";
import {Notify} from "../../../core/notify/notifications";
import {formatLabel} from "@swimlane/ngx-charts";
import {ShowModalService} from "../../not-active/show-modal.service";


@Component({
    selector: 'app-social',
    templateUrl: './portfolio-manager.component.html',
    styleUrls: ['../insertions.scss', './portfolio-manager.component.scss', '../order-manager/order-manager.component.scss',]
})
export class PortfolioManagerComponent implements OnInit {
    profitPercent: number = 0;
    portfolioChart: PortfolioChart[] = [];
    portfolio: Portfolio;
    pairs: Pair[];
    activeTab: number = 0;
    started: boolean = false;
    currency: string = 'BTC';
    types: string[] = ['Aggressive', 'Conservative', 'Balanced'];
    showGraph = false;
    today: Date = new Date();
    preloader: boolean = false;

    portfolioForm: FormGroup;
    submitted: boolean = false;

    portfolioTerms = AvailableExchanges.availablePortfolioTerms;

    color = {domain: ['#990D64', '#7A3A9C', '#4780F1', '#23C8D6']};

    constructor(public crService: CryptocurrenciesService, private formBuilder: FormBuilder,
                private portManagerService: PortfolioManagerService, private notifyService: NotifyService,
                public showModalSevice: ShowModalService) {
    }

    ngOnInit() {
        this.createForm();
        if (!this.crService.btcPrice) this.crService.getCryptocurrencies().subscribe();
    }

    getTermName(): string {
        return this.portfolioTerms.filter(t => t.nameToSend === this.period.value)[0].name;
    }

    createForm() {
        this.portfolioForm = this.formBuilder.group({
            nature: ['Aggressive', Validators.required],
            period: ['', Validators.required],
            coinsCount: ['4', [Validators.required, Validators.min(4), Validators.max(20)]],
            btc: ['', [Validators.required, Validators.min(0.5)]]
        });
    }

    submitForm() {
        this.prepareData();
        this.submitted = true;
        if (this.portfolioForm.valid) {
            this.showGraph = false;
            this.activeTab = 0;
            this.portfolioChart = [];
            this.preloader = true;
            this.portManagerService.generatePortfolio(this.portfolioForm.value).subscribe(data => {
                this.preloader = false;
                this.portfolio = data;
                for (const coin of Object.keys(data)) {
                    this.portfolioChart.push(new PortfolioChart(coin, data[coin]));
                }
                this.showGraph = true;
                this.notifyService.addNotification(new Notify(this.notifyService.lastId, 'Success!',
                    'Your new portfolio was successfully generated', 'success'));
            })
        }

    }

    prepareData(): PortfolioPreferences {
        if (this.currency === 'USD') {
            this.btc.setValue( Number.parseFloat(this.btc.value) / this.crService.btcPrice);
            this.currency = 'BTC';
        }
        return this.portfolioForm.value;
    }

    pieTooltipText({data}) {
        const label = formatLabel(data.name);
        const val = formatLabel(data.value);

        return `
      <span class="tooltip-label">${label}</span>
      <span class="tooltip-val">${val} BTC</span>
    `;
    }

    getTopData(days: number) {
        this.crService.getCryptocurrenciesTop(days);
        this.started = true;
    }

    getProfitPercent(value: number) {
        this.profitPercent = value;
    }

    get data(): CurrencyTop[] {
        return this.crService.currenciesTopData.sort((a, b) => b.percentIncrease - a.percentIncrease);
    }

    get nature() {
        return this.portfolioForm.get('nature');
    }

    get coinsCount() {
        return this.portfolioForm.get('coinsCount');
    }

    get period() {
        return this.portfolioForm.get('period');
    }

    get btc() {
        return this.portfolioForm.get('btc');
    }

}
