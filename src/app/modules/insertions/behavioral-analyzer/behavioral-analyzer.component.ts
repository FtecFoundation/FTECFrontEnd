import { Component, OnInit } from '@angular/core';
import {TitlesService} from '../../../core/services/titles.service';

@Component({
  selector: 'app-behavioral-analyzer',
  template: `
    <p>
      behavioral-analyzer works!
    </p>
  `,
  styles: []
})
export class BehavioralAnalyzerComponent implements OnInit {

    constructor(private titleService: TitlesService) {
    }

    ngOnInit() {
        this.titleService.init();
    }

}
