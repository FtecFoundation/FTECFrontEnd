import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-banned',
  templateUrl: './banned.component.html',
  styleUrls: ['./banned.component.scss']
})

export class BannedComponent implements OnInit {
  timeLeft: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.timeLeft = this.timeToString(params['timeLeft']);
    });
  }

  private timeToString(timeLeft: number): string{
    //Remove milliseconds
    timeLeft/=1000; timeLeft|=0;
    let ret= timeLeft%60+' seconds';
    timeLeft/=60; timeLeft|=0;
    if(timeLeft<=0) return ret;
    ret=timeLeft%60+' minutes, '+ret;
    timeLeft/=24; timeLeft|=0;
    if(timeLeft<=0) return ret;
    ret=timeLeft+' hours, '+ret;
    return ret;
  }
}
