import { Component, Input, OnInit } from '@angular/core';
import { trpItems } from './trp';


@Component({
  selector: 'app-social',
  templateUrl: './trp.component.html',
  styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', './trp.component.scss']
})
export class TrpComponent implements OnInit {

  trp = trpItems;

  constructor() {
  }

  ngOnInit() {
  }

}
