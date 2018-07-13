import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent} from './notification.component';
import { NotificationComponentRoutingModule } from './notification-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NotificationComponentRoutingModule
    ],
    declarations: [NotificationComponent]
})
export class NotificationModule { }
