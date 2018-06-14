import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './not-active.component.html',
  styleUrls: ['./not-active.component.scss', '../insertions/insertions.scss']
})
export class NotActiveComponent implements OnInit {

  @Input() show: boolean;

  constructor() {
  }

  ngOnInit() {
  }


}
