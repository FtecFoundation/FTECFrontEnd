import { Component, Input, OnInit } from '@angular/core';
import {ShowModalService} from '../../not-active/show-modal.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['../insertions.scss']
})
export class SocialComponent implements OnInit {

  constructor(private _showModalService: ShowModalService) {
  }

  ngOnInit() {
  }

    showModal() {
        this._showModalService.showModal = true;
    }

}
