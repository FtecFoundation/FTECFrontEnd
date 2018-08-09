import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowStubService} from './stub-modal.service';


@Component({
  selector: 'app-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.scss']
})

export class StubComponent implements OnInit{

  @Input() opened: boolean;
  @Input() title: string;
  @Input() text: string;


  constructor(public _showStubService: ShowStubService) {

  }


  ngOnInit() {
  }

  closeModal() {
    this._showStubService.opened = false;
  }



}
