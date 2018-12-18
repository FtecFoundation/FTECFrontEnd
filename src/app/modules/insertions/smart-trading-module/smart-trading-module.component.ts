import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ShowModalService} from '../../not-active/show-modal.service';
import {SmartTradingModuleService} from "./smart-trading-module.service";
import {SmartTradingData, SmartTradingPreferences} from "../../../core/models/smart-trading";
import {ExchangeKeys} from "../../../core/models/user";
import {AvailableExchanges, Stock} from "../arbitrage/available-exchanges";
import {CurrentUserService} from "../../../core/services/current-user.service";
import {NotifyService} from "../../../core/notify/notify.service";
import {Notify} from "../../../core/notify/notifications";
import {Bot, Bots} from "./bots";
import {FaqService} from "../../faq/faq.service";
import {config} from "../behavioral-analyzer/ngx-chart.config";


@Component({
    selector: 'app-social',
    templateUrl: './smart-trading-module.component.html',
    styleUrls: ['../insertions.scss', './smart-trading.component.scss',]
})
export class SmartTradingModuleComponent implements OnInit {
    preferences: SmartTradingPreferences;
    exchange: string;
    keys: ExchangeKeys[] = [];
    unusedExchanges: Stock[] = [];
    bots: Bot[] = Bots;
    history: SmartTradingData[];
    page: number = 0;

    howTo: string[] = ['User chooses intelligent trading module.',
    'User chooses exchange and sets trading limits.', 'User connects his API keys.',
    'Trading module trades according to the chosen algorithm and accumulates profit in user`s account.'];

    data = [{'name': 'Profit', 'series': []}];
    showRefLines = config.showRefLines;
    showRefLabels = config.showRefLabels;
    showGridLines = config.showGridLines;
    tooltipDisabled = config.tooltipDisabled;
    lineChartShowXAxis = config.lineChartShowXAxis;
    lineChartShowYAxis = config.lineChartShowYAxis;
    lineChartShowLegend = config.lineChartShowLegend;
    lineChartShowXAxisLabel = config.lineChartShowXAxisLabel;
    lineChartShowYAxisLabel = config.lineChartShowYAxisLabel;
    schemeType = config.schemeType;
    lineChartColorScheme = config.lineChartColorScheme;
    lineChartAutoScale = config.lineChartAutoScale;
    lineChartLineInterpolation = config.lineChartLineInterpolation;
    gradient = true;
    yScaleMin = -100;
    yScaleMax = 100;
    view: any[] = [];

    depth: string[] = ['Day', 'Week', 'Month', 'Year', 'All'];
    totalProfit = 0;
    constructor(private _showModal: ShowModalService, private _smartTradingService: SmartTradingModuleService,
                public _currentUserService: CurrentUserService, private notifyService: NotifyService,
                public _faqService: FaqService) {
    }

    ngOnInit() {
        this.view = [innerWidth / 2, 400];
        this._currentUserService.getStockKeys(false).subscribe(data => {

            this.keys = data;
            main: for (const stock of AvailableExchanges.availableStocks) {
                for (const key of this.keys) {
                    if (key.stock == stock) continue main;
                }
                this.unusedExchanges.push(stock)
            }

            if (!localStorage.getItem('exchange')) this.exchange = this.keys[0].stock.nameToSend;
            else this.exchange = localStorage.getItem('exchange');

            this._smartTradingService.getPreferences(this.exchange).subscribe(data => {
                delete data['user_id'];
                delete data.state;
                this.preferences = data;

                for (const bot of this.bots) {
                    if (bot.name === this.preferences.bot) bot.active = true;
                }
            })
        });

        this._smartTradingService.getStats().subscribe(data => {
            for (const bot of this.bots) {
                bot.profit90 = data[bot.name].profitAll;
                bot.profitMonth = data[bot.name].profitMonth;
                bot.profitWeek = data[bot.name].profitWeek;
                bot.successRate = data[bot.name].successes;
                bot.fails = data[bot.name].fails;
                if ((data[bot.name].fails + data[bot.name].successes) === 0) bot.accuracy = 0;
                else bot.accuracy = (data[bot.name].successes * 100) / (data[bot.name].fails + data[bot.name].successes);
            }
        });

        this.data[0]['series'] = [];
        this._smartTradingService.getHistory(this.page).subscribe(data => {
            this.history = data;
        });
        this._smartTradingService.getHistoryProfits('All').subscribe(data => {
            let min = 0;
            let max = 0;
            for (const item of data) {
                let profit = item['profit'];
                if (min > profit) min = profit;
                if (max < profit) max = profit;
                this.totalProfit += profit;
                this.data[0]['series'].push({
                    'value': profit,
                    'name': item['date'],
                    'min': this.yScaleMin,
                    'max': profit > 0 ? item.profit*0.9-1 : item.profit*1.1-1
                });
            }

            if (min < 0) this.yScaleMin = -1 *(Math.ceil(-1*min / 10) * 10);
            else this.yScaleMin = 0;

            if (max > 0) this.yScaleMax = Math.ceil(max / 10) * 10;
            else this.yScaleMax = 10;
        })

    }

    chooseExchange(exchange: string) {
        this.preferences.stock = exchange;
        this._smartTradingService.getPreferences(exchange).subscribe(data => {
            this.preferences = data;

            for (const bot of this.bots) {
                bot.active = false;
                if (bot.name === data.bot) bot.active = true;
            }

            localStorage.setItem('exchange', this.preferences.stock);
            this.exchange = this.preferences.stock;
        });
    }

    changeMaxTrade() {
        this._smartTradingService.setPreferences(this.preferences).subscribe(data => {
            this.notifyService.addNotification(new Notify(this.notifyService.lastId, 'Success!', 'Maximal trading amount was changed for your bots', 'success'));
        });
    }

    showModal() {
        this._showModal.showModal = true;
    }

    stopTrading() {
        this.preferences.state = false;
        this._smartTradingService.setPreferences(this.preferences).subscribe(() => {
            for (let bot of this.bots) bot.active = false;
        });
    }

    changeBot(bot: Bot) {
        this.preferences.bot = bot.name;
        this._smartTradingService.setPreferences(this.preferences).subscribe(() => {
            for (let bot of this.bots) bot.active = false;
            bot.active = true;
        });
    }

    onResize(event) {
        this.view = [event.target.innerWidth / 2, 400];
    }
}
