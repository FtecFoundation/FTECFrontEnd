import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowStubService} from './stub-modal.service';


@Component({
  selector: 'app-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.scss']
})

export class StubComponent implements OnInit {

  modalHeader: string;
  modalText: string;
  @Input() opened: boolean;

  constructor(public _showStubService: ShowStubService) { }

  
  ngOnInit() {

  }

  closeModal() {
    this._showStubService.opened = false;
  }

  showPopup(modalHeader: string ,modalText: string) {
    this._showStubService.opened = true;
    this.modalHeader = modalHeader;
    this.modalText = modalText;
  }

}
