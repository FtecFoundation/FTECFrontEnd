import {Component, Input, OnInit} from '@angular/core';
import {volumeAnalyzerItems} from './volume-analyzer';
import {ShowModalService} from '../../not-active/show-modal.service';
import {AvailableExchanges, Stock, Timeframe} from "../arbitrage/available-exchanges";
import {animate, style, transition, trigger} from "@angular/animations";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VolumeAnalyzerData, VolumeAnalyzerPreferences} from "../../../core/models/volume-analizer";
import {VolumeAnalyzerService} from "./volume-analyzer.service";
import {NotifyService} from "../../../core/notify/notify.service";
import {CurrentUserService} from "../../../core/services/current-user.service";
import {NotificationService} from '../../account/notification/notification.service';


@Component({
    selector: 'app-social',
    templateUrl: './volume-analyzer.component.html',
    styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', '../../account/my-exchanges/my-exchanges.component.scss', '../price-notification/price-notification.component.scss', '../order-manager/order-manager.component.scss', '../global-price-analyzer/global-price-analyzer.component.scss', './volume-analyzer.component.scss'],
    animations: [
        trigger('dataForTrades', [
            transition('void => *', [
                style({height: 0, opacity: 0}),
                animate('300ms ease-out')
            ]),
            transition('* => void', [
                animate('300ms ease-out', style({height: 0, opacity: 0}))
            ])
        ])
    ]
})
export class VolumeAnalyzerComponent implements OnInit {
    analyzerForm: FormGroup;

    exchanges: Stock[] = AvailableExchanges.availableStocks;
    chosenExchanges: Stock[];
    timeframes: Timeframe[] = AvailableExchanges.availableTimeframes;
    lastTimeframe: Timeframe;
    items = volumeAnalyzerItems;
    rates: string[] = ['0.5', '1.5', '2', '3'];
    autoTrades: boolean = false;
    allChosen = false;
    submitted: boolean = false;
    analyzerActivated: boolean;
    notConfigured: boolean = true;
    history: VolumeAnalyzerData[];

    howTo: string[] = ['The user selects cryptocurrency exchanges and coins, whose abnormal ' +
    ' behaviour is of interest to him. Or chooses the "no parameters" mode, ' +
    'in this case, the assistant tracks the entire available market’s segment.',
    'The assistant sends a notification each time he notices abnormal ' +
    'volumes increase in certain markets.',
    'The trader analyses the situation formed and takes the trade decision regarding to this asset.'];

    constructor(private _showModalService: ShowModalService, private formBuilder: FormBuilder,
                private _volumeAnalyzerService: VolumeAnalyzerService, private _notifyService: NotifyService,
                public _currentUserService: CurrentUserService,
                private _notificationService: NotificationService) {
    }

    ngOnInit() {
        this.createForm();
        this._volumeAnalyzerService.getHistory().subscribe(data => this.history = data);
        this._volumeAnalyzerService.getLastPreferences().subscribe(data => {
            if (data.status !== 45) {
                this.notConfigured = false;
                this.fillLastPreferences(data.response.settings);
            }
        });

        this.analyzerActivated = this._currentUserService.user.settingsStatus === 'ACTIVATED';
    }

    public updateNotificationStatus(type: string){
        this._currentUserService.notificationSettings[7][type] = !this._currentUserService.notificationSettings[7][type];
        const toChange = this._currentUserService.notificationSettings[7];
        toChange.notificationType=3;
        this._notificationService.updateNotification(toChange).subscribe(data => console.log(data));
    }

    getTimeframeName(symbol: string): string {
        return this.timeframes.filter(t => t.symbol === symbol)[0].name;
    }

    fillLastPreferences(preferences: VolumeAnalyzerPreferences) {
        this.basePair.setValue(preferences.basePair);
        this.rate.setValue(preferences.rate);
        this.minVolume.setValue(preferences.minVolume);
        this.timeframe.setValue(preferences.timeframe);
        this.lastTimeframe = AvailableExchanges.availableTimeframes.filter(t => t.symbol === preferences.timeframe)[0];
        for (const exchange of this.exchanges) {
            if (preferences.stocks.indexOf(exchange.nameToSend) !== -1) exchange.volumeAnalyzerChosen = true;
        }
    }

    chooseAllExchanges() {
        for (const exchange of this.exchanges) {
            exchange.volumeAnalyzerChosen = !this.allChosen;
        }

        this.allChosen = !this.allChosen;
        this.fillChosenExchanges();
    }

    fillChosenExchanges() {
        this.chosenExchanges = [];
        for (const e of this.exchanges) {
            if (e.volumeAnalyzerChosen) {
                this.chosenExchanges.push(e);
            }
        }
    }

    submitForm() {
        this.fillChosenExchanges();
        console.log(this.chosenExchanges);
        console.log(this.analyzerForm)
        this.submitted = true;
        if (this.analyzerForm.valid) {
            this._volumeAnalyzerService.setPreferences(this.prepareData()).subscribe(data => {
                this.analyzerActivated = true;
            });
        }
    }

    prepareData(): VolumeAnalyzerPreferences {
        return new VolumeAnalyzerPreferences().deserialize(this.analyzerForm.value, this.chosenExchanges);
    }

    createForm() {
        this.analyzerForm = this.formBuilder.group({
            basePair: ['BTC', Validators.required],
            rate: ['', [Validators.required, Validators.min(0.1)]],
            minVolume: ['20', [Validators.required, Validators.min(1)]],
            timeframe: ['', Validators.required]
        });
    }

    chooseRate(rate: string) {
        this.rate.setValue(rate);
    }

    getProfitPercent(value: number) {
        this.minVolume.setValue(value);
    }

    selectTimeframe(timeframe: Timeframe) {
        this.timeframe.setValue(timeframe.symbol);
    }

    startAnalyzing(){
        this._volumeAnalyzerService.startBot().subscribe(() =>this.analyzerActivated = true);
    }

    stopAnalyzing(){
        this._volumeAnalyzerService.stopBot().subscribe(() => this.analyzerActivated = false);
    }

    get basePair() {
        return this.analyzerForm.get('basePair');
    }

    get rate() {
        return this.analyzerForm.get('rate');
    }

    get timeframe() {
        return this.analyzerForm.get('timeframe');
    }

    get minVolume() {
        return this.analyzerForm.get('minVolume');
    }

}
