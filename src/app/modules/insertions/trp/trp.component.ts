import { Component, Input, OnInit } from '@angular/core';
import { trpItems } from './trp';
import {Pair} from "../../../core/models/pair";


@Component({
  selector: 'app-social',
  templateUrl: './trp.component.html',
  styleUrls: ['../insertions.scss', '../behavioral-analyzer/behavioral-analyzer.component.scss', './trp.component.scss']
})
export class TrpComponent implements OnInit {

  trp = trpItems;
    pairs: Pair[];

  constructor() {
  }

  ngOnInit() {
  }

}
