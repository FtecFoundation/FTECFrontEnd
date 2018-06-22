import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShowModalService} from '../../not-active/show-modal.service';
import {availableExchanges} from './available-exchanges';
import {ArbitrageService} from '../../../core/services/arbitrage.service';
import {ArbitrageWindowRequest, ArbitrageWindows, ArbitrageWindowsLog} from '../../../core/models/arbitrage-window';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationValidators} from '../../../auth/registration/registration.validators';

@Component({
    selector: 'app-arbitrage',
    templateUrl: './arbitrage.component.html',
    styleUrls: ['../insertions.scss', './arbitrage.component.scss']
})

export class ArbitrageComponent implements OnInit {
    exchanges = availableExchanges;
    preloader = false;
    allChosen = false;
    windowsLogs: ArbitrageWindowsLog;
    arbitrageWindows: ArbitrageWindows;
    arbitrageForm: FormGroup;
    chosenExchanges: string[] = [];
    submitted = false;

    constructor(private _showModalService: ShowModalService,
                private _arbitrageService: ArbitrageService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this._arbitrageService.getOldWindows().subscribe(data => {
            this.windowsLogs = data;
        });
        this.createForm();
    }

    createForm() {
        this.arbitrageForm = this.formBuilder.group({
            minVolume: ['', [Validators.required, Validators.min(20)]],
            minPercent: ['', [Validators.required, Validators.min(2)]],
            orderVolume: ['', Validators.min(0.01)],
            isOrderVolume: false
        });
        this.arbitrageForm = new FormGroup(this.arbitrageForm.controls, { updateOn: 'blur' });
    }

    showModal() {
        this._showModalService.showModal = true;
    }

    fillChosenExchanges() {
        this.chosenExchanges = [];
        for (const e of this.exchanges) {
            if (e.chosen) { this.chosenExchanges.push(e.exchange); }
        }
    }

    chooseExchange(exhange: any) {
        if (!this.allChosen) { exhange.chosen = !exhange.chosen; }
        this.fillChosenExchanges();
    }

    chooseAllExchanges() {
        for (const exchange of this.exchanges) {
            exchange.chosen = !this.allChosen;
        }

        this.allChosen = !this.allChosen;
        this.fillChosenExchanges();
    }

    toggleCheckbox(field: AbstractControl) {
        field.value === true ? field.setValue(false) : field.setValue(true);
        if (!field.value) { this.orderVolume.setValue(null); }
    }

    submitForm() {
        this.fillChosenExchanges();
        this.submitted = true;
        if (this.arbitrageForm.valid) {
            this.preloader = true;
            this._arbitrageService.getArbitrageWindows(this.prepareData()).subscribe(data => {
                this.arbitrageWindows = data;
                console.log(this.arbitrageWindows);

                this.preloader = false;
            });
        }
    }

    prepareData(): ArbitrageWindowRequest {
        return new ArbitrageWindowRequest().deserialize(this.arbitrageForm.value, this.chosenExchanges);
    }

    get isOrderVolume() { return this.arbitrageForm.get('isOrderVolume'); }

    get minVolume() { return this.arbitrageForm.get('minVolume'); }

    get minPercent() { return this.arbitrageForm.get('minPercent'); }

    get orderVolume() { return this.arbitrageForm.get('orderVolume'); }
}
