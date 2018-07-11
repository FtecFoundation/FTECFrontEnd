import { Component, Input, OnInit } from '@angular/core';
import { volumeAnalyzerItems } from './volume-analyzer';
import {ShowModalService} from '../../not-active/show-modal.service';


@Component({
  selector: 'app-social',
  templateUrl: './volume-analyzer.component.html',
  styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', '../social/social.component.scss', '../my-exchanges/my-exchanges.component.scss', '../price-notification/price-notification.component.scss', '../order-manager/order-manager.component.scss', '../global-price-analyzer/global-price-analyzer.component.scss', './volume-analyzer.component.scss']
})
export class VolumeAnalyzerComponent implements OnInit {

  items = volumeAnalyzerItems;
  showModal = false;

  constructor(private _showModalService: ShowModalService) {
  }

  ngOnInit() {

  }

  showPopup() {
    this.showModal = true;
  }

  showNotActiveModal() {
    this._showModalService.showModal = true;
  }


}
