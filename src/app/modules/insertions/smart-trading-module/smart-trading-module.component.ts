import { Component, Input, OnInit } from '@angular/core';
import { ShowModalService } from '../../not-active/show-modal.service';


@Component({
  selector: 'app-social',
  templateUrl: './smart-trading-module.component.html',
  styleUrls: ['../insertions.scss', './smart-trading.component.scss']
})
export class SmartTradingModuleComponent implements OnInit {

  constructor(private _showModal: ShowModalService) {
  }

  ngOnInit() {
  }

  showModal() {
    this._showModal.showModal = true;
  }

}
