import { Component, OnInit } from '@angular/core';
import { ShowModalService } from '../not-active/show-modal.service';
import { ShowStubService } from '../stub/stub-modal.service';
import { routerAnimation } from './layout.animation';
import { transition, trigger, useAnimation } from '@angular/animations';
import { CurrentUserService } from '../../core/services/current-user.service';
import { ShowNotifyService } from '../../shared/notify/notify.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    animations: [
        trigger('routerAnimations', [
            transition('* <=> *', [
                useAnimation(routerAnimation)
            ])
        ])
    ]
})
export class LayoutComponent implements OnInit {

    notify: boolean;

    constructor(public _showModalService: ShowModalService,
        public _currentUserService: CurrentUserService, 
        public _showStubService: ShowStubService,
        private _showNotify: ShowNotifyService) {
    }

    ngOnInit() {

    }
    
    prepRouteState(outlet: any) {
        return outlet.activatedRouteData['title'] || null;
    }
    
    showNotify() {
        this.notify = this._showNotify.notifyPopup;
        this._showNotify.showNotifyPopup();
    }


}
