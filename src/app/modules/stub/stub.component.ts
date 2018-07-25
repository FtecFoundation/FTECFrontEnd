import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.scss']
})

export class StubComponent implements OnInit {

  modalHeader: string;
  modalText: string;

  constructor(private route: ActivatedRoute) { }

  opened: boolean;

  ngOnInit() {

  }


  closeModal() {
    this.opened = false;
  }

  showPopup(modalHeader: string ,modalText: string) {
    this.modalHeader = modalHeader;
    this.modalText = modalText;
    this.opened = true;
  }

}
