import { Component, Input, OnInit } from '@angular/core';
import { availableExchanges } from '../../arbitrage/available-exchanges';
import {ShowModalService} from '../../../not-active/show-modal.service';



@Component({
  selector: 'app-volume-popup',
  templateUrl: './volume-popup.component.html',
  styleUrls: ['./volume-popup.component.scss', '../volume-analyzer.component.scss']
})
export class VolumePopupComponent implements OnInit {

  exchanges = availableExchanges;

  constructor(private _showModalService: ShowModalService) {
  }

  ngOnInit() {
  }


  showModal() {
    this._showModalService.showModal = true;
  }

}
