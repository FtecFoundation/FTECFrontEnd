import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ImageService } from '../../../core/services/image.service';
import { ShowModalService } from '../../not-active/show-modal.service';
import { availableFaqLeft } from './available-faq-left';
import { availableFaqRight } from './available-faq-right';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['../insertions.scss', './faq.component.scss']
})
export class FaqComponent implements OnInit {
  show = true;
  faqsLeft = availableFaqLeft;
  faqsRight = availableFaqRight;

  ngOnInit() {
  }

  answer(faq: any) {
    for (const a of this.faqsLeft) {
      if (a !== faq) { a.chosen = false; }
    }

    for (const a of this.faqsRight) {
      if (a !== faq) { a.chosen = false; }
    }

    faq.chosen = !faq.chosen;
  }


}
