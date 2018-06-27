import { Component, OnInit } from '@angular/core';

import {changeLog} from './change-log';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['../insertions.scss', './change-log.component.scss']
})
export class ChangeLogComponent implements OnInit {
  changeLog = changeLog;

  constructor() { }

  ngOnInit() {
  }

}
