import {NgModule} from '@angular/core';
import {NotificationComponent} from './notification.component';
import {RouterModule} from '@angular/router';



@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: NotificationComponent, data: {title: 'Notification settings'}},
        ])
    ],
    exports: [RouterModule]
})
export class NotificationComponentRoutingModule {
}
