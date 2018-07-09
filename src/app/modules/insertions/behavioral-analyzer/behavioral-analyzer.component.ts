import { Component, Input, OnInit } from '@angular/core';
import { behavioralAnalyzerItems } from './behavioral-analyzer';
// import { availableExchanges } from '../arbitrage/available-exchanges';


@Component({
  selector: 'app-social',
  templateUrl: './behavioral-analyzer.component.html',
  styleUrls: ['../insertions.scss', './behavioral-analyzer.component.scss']
})
export class BehavioralAnalyzerComponent implements OnInit {

  behavioralItems = behavioralAnalyzerItems;

  exchanges = ["New", "Old"];

  constructor() {
  }

  ngOnInit() {
  }

}
