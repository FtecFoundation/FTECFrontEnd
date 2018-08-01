import { Injectable } from '@angular/core';

@Injectable()
export class ShowStubService {

  opened = false;
  title = '2';
  text = '1';


  constructor() { }



  showPopup(modalHeader: string, modalText: string) {
    this.opened = true;
    this.title = modalHeader;
    this.text = modalText;

    // console.log(modalHeader + ' ' + modalText)
  }
}
