import { Injectable } from '@angular/core';

@Injectable()
export class ShowStubService {
  modalHeader: string = '';
  modalText: string = '';

  opened = false;

  constructor() { }

}
