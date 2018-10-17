import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TradingRecommendation} from "../trp";
import {CurrentUserService} from "../../../../core/services/current-user.service";
import {periods, types} from "../my-recommendations/my-recommendations.component";
import {Router} from "@angular/router";
import {TrpService} from "../trp.service";
import {NotifyService} from "../../../../core/notify/notify.service";
import {Notify} from "../../../../core/notify/notifications";

@Component({
    selector: 'app-recommendation',
    templateUrl: './recommendation.component.html',
    styleUrls: ['../trp.component.scss']
})
export class RecommendationComponent implements OnInit {
    @Output() changeRecommendationId: EventEmitter<number> = new EventEmitter<number>();
    @Input() recommendation: TradingRecommendation;
    @Input() bought: boolean;
    @Input() owner: boolean;
    @Input() view: boolean;

    types = types;
    periods = periods;

    constructor(public currentUserService: CurrentUserService, private router: Router, private trpService: TrpService,
                private notifyService: NotifyService) {
    }

    ngOnInit() {
    }

    goToRecommendation(id: number) {
        this.router.navigateByUrl('/modules/trp/' + id);
        this.changeRecommendationId.emit(id);
    }

    countdown(countDownDate: Date): any {
        const now = new Date().getTime();
        const converted = new Date(countDownDate).getTime();
        const distance = converted - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        if (minutes < 0) return false;

        return {left: days + "d : " + hours + "h : " + minutes + "m", expiring: !days && !hours && minutes < 15};
    }

    buyRecommendation(id: number) {
        this.trpService.subscribe(id).subscribe(data => {
            this.notifyService.addNotification(new Notify(this.notifyService.lastId, 'Success!',
                'You has been subscribed for this trading recommendation', 'success'));
            this.recommendation.subscribed = true;
        });
    }
}
