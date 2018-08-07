import { Injectable, Input } from '@angular/core';

@Injectable()
export class ShowNotifyService {

  opened = false;
  notifyPopup = false;

  constructor() { }

  showNotifyPopup() {
    this.notifyPopup = !this.notifyPopup;
  }

}
