import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cryptoacademy',
  template: '<div class="wrapper">' +
      '<app-info-popup collapsedText="How does the Cryptoacademy module work?" [openedText]="howTo"></app-info-popup>' +
      '<router-outlet></router-outlet>' +
      '</div>',
  styleUrls: ['../insertions.scss', './cryptoacademy.component.scss', '../../../../assets/styles/medias.scss']
})
export class CryptoacademyComponent implements OnInit {
  howTo: string[] = ['Trader has an availability to theoretical and supporting materials in text and video formats.',
  'Available section with trader "simulators" – trading practical exercises aimed at the development of traders’ skills',
  'Key topics and sections choosing availability which are necessary to concentrate the educational process on.',
  'It is possible to get statistics on the student\'s educational successes, the effectiveness of passing the tests and the level of the material’s assimilation.'];

  constructor() {
  }

  ngOnInit() {
  }

}
