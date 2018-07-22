import { Component, OnInit} from '@angular/core';
import { availableFaqLeft } from './available-faq-left';
import { availableFaqRight } from './available-faq-right';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['../insertions/insertions.scss', './faq.component.scss']
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
