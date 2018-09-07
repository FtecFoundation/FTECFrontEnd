import { Component, Input, OnInit } from '@angular/core';
import { volumeAnalyzerItems } from './volume-analyzer';
import {ShowModalService} from '../../not-active/show-modal.service';
import {Pair} from "../../../core/models/pair";
import {AvailableExchanges, Stock, Timeframe} from "../arbitrage/available-exchanges";


@Component({
  selector: 'app-social',
  templateUrl: './volume-analyzer.component.html',
  styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', '../../account/my-exchanges/my-exchanges.component.scss', '../price-notification/price-notification.component.scss', '../order-manager/order-manager.component.scss', '../global-price-analyzer/global-price-analyzer.component.scss', './volume-analyzer.component.scss']
})
export class VolumeAnalyzerComponent implements OnInit {

  exchanges: Stock[] = AvailableExchanges.availableStocks;
  timeframes: Timeframe[] = AvailableExchanges.availableTimeframes;
  items = volumeAnalyzerItems;
  pairs: Pair[];
  showPopupModal = false;
  profitPercent: number = 0;

  constructor(private _showModalService: ShowModalService) {
  }

  ngOnInit() {

  }

  showPopup() {
    this.showPopupModal = true;
  }

    getProfitPercent(value: number) {
        this.profitPercent = value;
    }

  showModal() {
    this._showModalService.showModal = true;
  }

}
