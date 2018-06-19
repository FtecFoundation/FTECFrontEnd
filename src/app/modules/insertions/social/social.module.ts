import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SocialComponent} from './social.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SocialRoutingModule} from './social-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SocialRoutingModule
    ],
    declarations: [SocialComponent]
})
export class SocialModule {
}
