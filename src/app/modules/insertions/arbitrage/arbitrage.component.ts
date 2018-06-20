import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShowModalService} from '../../not-active/show-modal.service';
import {availableExchanges} from './available-exchanges';

@Component({
    selector: 'app-arbitrage',
    templateUrl: './arbitrage.component.html',
    styleUrls: ['../insertions.scss']
})

export class ArbitrageComponent implements OnInit {
    exchanges = availableExchanges;
    allChosen = false;

    constructor(private _showModalService: ShowModalService) {
    }

    ngOnInit() {
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


}
