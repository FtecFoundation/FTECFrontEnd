import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ReferralService} from "./referral.service";
import {CurrentUserService} from "../../../core/services/current-user.service";
import {ReferralData} from "../../../core/models/referrals";

@Component({
    selector: 'app-referrals',
    templateUrl: './referrals.component.html',
    styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {
    @ViewChild('uploader') inputImage: ElementRef;
    private imageSrc = '';

    constructor(private referralService: ReferralService, private currentUserService: CurrentUserService) {
    }

    tabLvl1 = true;
    tabLvl2 = false;
    tabLvl3 = false;
    totalReferrals: number = 0;
    referralLink: string = '';
    referrals: ReferralData;
    allTime: number = 0;
    withdraw: number;

    showPopupModal = false;


    ngOnInit() {
        this.referralService.getReferrals().subscribe(allData => {
            const referrals = allData['referrals'];
            this.totalReferrals = referrals.levelOne.length + referrals.levelTwo.length + referrals.levelThree.length;
            this.referrals = referrals;
            this.withdraw=allData['withdraw'];

            this.getAllTimeBalance(referrals);
        });

        this.referralLink = window.location.origin + '/auth/registration/' + this.currentUserService.user.id;
    }

    getAllTimeBalance(data: ReferralData) {
        for (const lvl of Object.keys(data)) {
            for (const ref of data[lvl]) {
                this.allTime += ref.balance;
            }
        }
    }

    showTab1() {
        this.tabLvl2 = false;
        this.tabLvl3 = false;
        this.tabLvl1 = true;
    }

    showTab2() {
        this.tabLvl1 = false;
        this.tabLvl3 = false;
        this.tabLvl2 = true;
    }

    showTab3() {
        this.tabLvl1 = false;
        this.tabLvl2 = false;
        this.tabLvl3 = true;
    }

    showPopup() {
        this.showPopupModal = true;
    }

}
