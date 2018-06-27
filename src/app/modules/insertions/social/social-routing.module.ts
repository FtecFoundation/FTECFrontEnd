import {NgModule} from '@angular/core';
import {SocialComponent} from './social.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: SocialComponent, data: {title: 'Social Assistant'}}
            ])
    ],
    exports: [RouterModule]
})
export class SocialRoutingModule {
}
