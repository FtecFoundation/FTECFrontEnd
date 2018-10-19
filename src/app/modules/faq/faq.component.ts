import { Component, OnInit} from '@angular/core';
import { availableFaqLeft } from './available-faq-left';
import { availableFaqRight } from './available-faq-right';
import {Router} from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['../insertions/insertions.scss', './faq.component.scss']
})
export class FaqComponent implements OnInit {
  show = true;
  faqsLeft = availableFaqLeft;
  faqsRight = availableFaqRight;
  private static obj;

  constructor(private router: Router){
    FaqComponent.obj=this;
  }

  public static currentQuestion: number = 0;

  ngOnInit() {
  }

  answer(faq: any) {
    if(FaqComponent.currentQuestion==faq) FaqComponent.currentQuestion=0;
    else FaqComponent.currentQuestion=faq;
  }

  get currentQuestion(){
    return FaqComponent.currentQuestion;
  }

  public static goToFaq(question:number=0){
    FaqComponent.currentQuestion=question;
    FaqComponent.obj.router.navigateByUrl('/info/faq')
  }
}
