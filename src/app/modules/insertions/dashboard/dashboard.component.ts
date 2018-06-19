import { Component, Input, OnInit } from '@angular/core';
import {CryptocurrenciesService} from '../../../core/services/cryptocurrencies.service';
import {Cryptocurrency} from '../../../core/models/cryptocurrency';
import {ShowModalService} from '../../not-active/show-modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../insertions.scss', './dashboard.scss']
})
export class DashboardComponent implements OnInit {

    // preloader: boolean = true;
    currencies: Cryptocurrency[] = [];

  constructor(private _cryptoService: CryptocurrenciesService,
              private _showModalService: ShowModalService) {
                //   this.preloader = true;
  }

  ngOnInit() {
      this._cryptoService.getCryptocurrencies().subscribe(data => {
          for (const val of Object.values(data['data'])) {
              this.currencies.push(<Cryptocurrency> val);
          }
        //   this.preloader = false;
      });
  }

    showModal() {
        this._showModalService.showModal = true;
    }

}
