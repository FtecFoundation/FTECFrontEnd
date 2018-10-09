import {Component, OnInit} from '@angular/core';
import {PairsFilterService} from "../../../../core/services/pairs-filter/pairs-filter.service";
import {Pair} from "../../../../core/models/pair";
import {Stock} from "../../arbitrage/available-exchanges";
import {CreateRecommendationData} from "../trp";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TrpService} from "../trp.service";

export const types =
    {
        Long: 'Growth',
        Neutral: 'Neutral',
        Short: 'Falls'
    };

export const periods =
    {
        '1 hour': 'Hour',
        '1 day': 'Day',
        '3 days': 'ThreeDays',
        '1 week': 'Week'
    };

@Component({
    selector: 'app-create-recommendation',
    templateUrl: './create-recommendation.component.html',
    styleUrls: ['../trp.component.scss']
})
export class CreateRecommendationComponent implements OnInit {
    newRecommendation: CreateRecommendationData = new CreateRecommendationData();
    pairExchange: Stock;
    free: boolean = false;

    signalForm: FormGroup;
    submitted: boolean = false;

    typesList = Object.keys(types);
    types = types;
    periodsList = Object.keys(periods);
    periods = periods;

    response;

    constructor(public pairsFilterService: PairsFilterService, private formBuilder: FormBuilder, private trpService: TrpService) {
    }

    ngOnInit() {
        this.pairsFilterService.selectedPair = null;
        if (!this.pairsFilterService.allPairs) this.pairsFilterService.fillAllPairs();

        this.createForm();
    }

    createForm() {
        this.signalForm = this.formBuilder.group({
            pair: ['', [Validators.required]],
            stock: ['', [Validators.required]],
            price: ['', [Validators.required]],
            type: ['', [Validators.required]],
            period: ['', [Validators.required]],
            title: ['', [Validators.required]],
            content: ['', [Validators.required]],
            predictChange: ['', [Validators.required]]
        });
    }

    get pair() {
        return this.signalForm.get('pair');
    }

    get stock() {
        return this.signalForm.get('stock');
    }

    get price() {
        return this.signalForm.get('price');
    }

    get period() {
        return this.signalForm.get('period');
    }

    get title() {
        return this.signalForm.get('title');
    }

    get content() {
        return this.signalForm.get('content');
    }

    get predictChange() {
        return this.signalForm.get('predictChange');
    }

    get type() {
        return this.signalForm.get('type');
    }

    onPairSelected(pair: Pair) {
        this.pairsFilterService.selectPair(pair);
        this.pair.setValue(`${pair.base}-${pair.symbol}`);

        this.pairExchange = pair.exchange;
        this.stock.setValue(pair.exchange.nameToSend);
    }

    chooseStock(stock: Stock) {
        this.pairExchange = stock;
        this.stock.setValue(stock.nameToSend);
    }

    submitForm() {
        this.submitted = true;
        if (this.signalForm.valid) {
            this.trpService.createRecommendation(this.signalForm.value).subscribe(data => this.response = data);
        }
    }
}
