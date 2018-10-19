import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {FaqComponent} from './faq.component';

@Injectable()
export class FaqService{
    constructor(private router: Router) { }

    public goToFaq(question:number=0){
        FaqComponent.currentQuestion=question;
        this.router.navigateByUrl('/info/faq')
    }
}