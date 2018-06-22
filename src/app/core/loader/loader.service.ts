import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
  loading: boolean = true;

  constructor() { }

  showLoader() {
    this.loading = true;
  }

  hideLoader() {
    this.loading = false;
  }

}
