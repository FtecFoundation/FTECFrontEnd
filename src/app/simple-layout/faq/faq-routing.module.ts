import {NgModule} from '@angular/core';
import {FaqComponent} from './faq.component';
import {RouterModule} from '@angular/router';



@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: FaqComponent, data: {title: 'FAQ'}},
        ])
    ],
    exports: [RouterModule]
})
export class FaqComponentRoutingModule {
}
