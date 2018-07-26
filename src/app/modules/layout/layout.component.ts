import {Component, OnInit} from '@angular/core';
import {ShowModalService} from '../not-active/show-modal.service';
import {ShowStubService} from '../stub/stub-modal.service';
import {routerAnimation} from './layout.animation';
import {transition, trigger, useAnimation} from '@angular/animations';
import {CurrentUserService} from '../../core/services/current-user.service';

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

    constructor(public _showModalService: ShowModalService, public _currentUserService: CurrentUserService, public _showStubService: ShowStubService) {
    }

    ngOnInit() {
    }

    prepRouteState(outlet: any) {
        return outlet.activatedRouteData['title'] || null;
    }


}
