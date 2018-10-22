import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cryptoacademy',
  template: '<div class="wrapper">' +
      '<app-info-popup collapsedText="How doest the TRP module work?" openedText="TRP module works just fine"></app-info-popup>' +
      '<router-outlet></router-outlet>' +
      '</div>',
  styleUrls: ['../insertions.scss', './cryptoacademy.component.scss', '../../../../assets/styles/medias.scss']
})
export class CryptoacademyComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
