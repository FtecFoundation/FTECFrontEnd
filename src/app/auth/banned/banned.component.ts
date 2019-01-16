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
    let ret = '';
    //Remove milliseconds
    timeLeft/=1000;
    ret += timeLeft%60+' seconds';
    timeLeft/=60;
    if(timeLeft<=0) return ret;
    ret+=timeLeft%60+' minutes, ';
    timeLeft/=24;
    if(timeLeft<=0) return ret;
    ret+=timeLeft+' hours, ';
    return ret;
  }
}
