import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShowModalService} from '../../not-active/show-modal.service';
import {availableExchanges} from './available-exchanges';
import {ArbitrageService} from '../../../core/services/arbitrage.service';
import {ArbitrageWindows, ArbitrageWindowsLog} from '../../../core/models/arbitrage-window';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationValidators} from '../../../auth/registration/registration.validators';

@Component({
    selector: 'app-arbitrage',
    templateUrl: './arbitrage.component.html',
    styleUrls: ['../insertions.scss', './arbitrage.component.scss']
})

export class ArbitrageComponent implements OnInit {
    exchanges = availableExchanges;
    allChosen = false;
    windowsLogs: ArbitrageWindowsLog;
    arbitrageWindows: ArbitrageWindows;
    arbitrageForm: FormGroup;

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
            minVolume: ['', Validators.min(20)],
            minPercent: ['', Validators.min(2)],
            orderVolume: '',
            isOrderVolume: false
        });
    }

    showModal() {
        this._showModalService.showModal = true;
    }

    chooseExchange(exhange: any) {
        if (!this.allChosen) { exhange.chosen = !exhange.chosen; }
    }

    chooseAllExchanges() {
        for (const exchange of this.exchanges) {
            exchange.chosen = !this.allChosen;
        }

        this.allChosen = !this.allChosen;
    }

    toggleCheckbox(field: AbstractControl) {
        field.value === true ? field.setValue(false) : field.setValue(true);
        console.log(field.value);
    }


    get isOrderVolume() { return this.arbitrageForm.get('isOrderVolume'); }

    get minVolume() { return this.arbitrageForm.get('minVolume'); }

    get minPercent() { return this.arbitrageForm.get('minPercent'); }
}
