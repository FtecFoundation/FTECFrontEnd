import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShowModalService} from '../../not-active/show-modal.service';

@Component({
  selector: 'app-arbitrage',
  templateUrl: './arbitrage.component.html',
  styleUrls: ['../insertions.scss']
})

export class ArbitrageComponent implements OnInit {

  constructor(private _showModalService: ShowModalService) {
  }

  ngOnInit() {
  }

  showModal() {
    this._showModalService.showModal = true;
  }


}
