import { Injectable } from '@angular/core';

@Injectable()
export class ShowStubService {
  modalHeader = '';
  modalText = '';

  opened = false;

  constructor() { }

}
