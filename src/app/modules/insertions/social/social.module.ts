import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SocialComponent} from './social.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SocialRoutingModule} from './social-routing.module';
import {TwitterModule} from 'ngx-twitter';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SocialRoutingModule,
        TwitterModule
    ],
    declarations: [SocialComponent]
})
export class SocialModule {
}
