import { Component, OnInit} from '@angular/core';
import {availableFaq} from './available-faq-left';
import {FaqService} from "./faq.service";
import {FaqRestService} from "./faq-rest.service";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['../insertions/insertions.scss', './faq.component.scss']
})
export class FaqComponent implements OnInit {
  show = true;
  faqs = availableFaq;
  faqsLeft = [];
  faqsRight = [];

  public static currentQuestion: number = 0;

  constructor(private faqService: FaqRestService) {}

  ngOnInit() {
    this.faqService.getFaqs().subscribe();

    for (let i = 0; i < this.faqs.length; i++) {
      if (i % 2 === 0) this.faqsRight.push(this.faqs[i]);
      else this.faqsLeft.push(this.faqs[i]);
    }
  }

  answer(faq: any) {
    if(FaqComponent.currentQuestion==faq) FaqComponent.currentQuestion=0;
    else FaqComponent.currentQuestion=faq;
  }

  get currentQuestion(){
    return FaqComponent.currentQuestion;
  }
}
