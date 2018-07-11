import { Component, Input, OnInit } from '@angular/core';
import { availableExchanges } from '../../arbitrage/available-exchanges';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-volume-popup',
  templateUrl: './volume-popup.component.html',
  styleUrls: ['./volume-popup.component.scss', '../volume-analyzer.component.scss']
})
export class VolumePopupComponent implements OnInit {

  exchanges = availableExchanges;
  @Input() showModal;

  constructor() {
  }

  ngOnInit() {
  }

  closeModal() {
    this.showModal = false;
  }

}
