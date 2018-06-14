import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ShowModalService} from './show-modal.service';

@Component({
  selector: 'app-popup',
  templateUrl: './not-active.component.html',
  styleUrls: ['./not-active.component.scss', '../insertions/insertions.scss']
})
export class NotActiveComponent implements OnInit {

  @Input() show: boolean;

  constructor(private _showModalService: ShowModalService) {
  }

  ngOnInit() {
  }

  closeModal() {
    this._showModalService.showModal = false;
  }

}
