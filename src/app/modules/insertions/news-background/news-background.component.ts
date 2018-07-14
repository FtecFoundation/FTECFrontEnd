import { Component, Input, OnInit } from '@angular/core';
import { SocialService } from '../../../core/services/social.service';
import { Router } from '@angular/router';
import { availableExchanges } from '../arbitrage/available-exchanges';



@Component({
  selector: 'app-social',
  templateUrl: './news-background.component.html',
  styleUrls: ['../insertions.scss', './news-background.component.scss']
})
export class NewsBackgroundComponent implements OnInit {

  daysLeft: any = 0;
  exchanges = availableExchanges;


  constructor(private _socialService: SocialService,
    private router: Router) {
  }


  ngOnInit() {
  }


  getDaysLeft() {
    this._socialService.getExpirationDate().subscribe(data => {
      const today = new Date().getTime();
      const expirationDate = new Date(data).getTime();
      const difference = expirationDate - today;
      if (difference > 0) {
        this.daysLeft = Math.round(difference / (24 * 60 * 60 * 1000));
      } else {
        this.daysLeft = 0;
      }
    });
  }

  renewSubscription() {
    this._socialService.renewSubscription().subscribe(() => {
      this.getDaysLeft();
    });
  }

}
