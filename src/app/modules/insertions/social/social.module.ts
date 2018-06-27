import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SocialComponent} from './social.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SocialRoutingModule} from './social-routing.module';
import {TwitterModule} from 'ngx-twitter';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SocialRoutingModule,
        TwitterModule,
        SharedModule
    ],
    declarations: [SocialComponent]
})
export class SocialModule {
}
