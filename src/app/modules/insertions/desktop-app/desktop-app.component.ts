import { Component, Input, OnInit } from '@angular/core';
import {ShowModalService} from "../../not-active/show-modal.service";

@Component({
  selector: 'app-social',
  templateUrl: './desktop-app.component.html',
  styleUrls: ['../insertions.scss', './desktop-app.component.scss']
})
export class DesktopAppComponent implements OnInit {

  constructor(public showModalService: ShowModalService) {
  }

  ngOnInit() {
  }

}
