import { Component, Input, OnInit } from '@angular/core';
import { AvailableExchanges } from '../../arbitrage/available-exchanges';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-volume-popup',
  templateUrl: './volume-popup.component.html',
  styleUrls: ['./volume-popup.component.scss', '../volume-analyzer.component.scss']
})
export class VolumePopupComponent implements OnInit {

  exchanges = AvailableExchanges;
  @Input() showPopupModal;

  constructor() {
  }

  ngOnInit() {
  }

  closeModal() {
    this.showPopupModal = false;
  }

}
