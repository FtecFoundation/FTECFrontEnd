import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent} from './notification.component';
import { NotificationComponentRoutingModule } from './notification-routing.module';
import { NotificationService } from './notification.service';

@NgModule({
    imports: [
        CommonModule,
        NotificationComponentRoutingModule
    ],
    declarations: [NotificationComponent],
    providers: [NotificationService]

})
export class NotificationModule { }
