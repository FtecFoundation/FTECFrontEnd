import { Component, Input, OnInit } from '@angular/core';
import { CurrentUserService } from '../../../core/services/current-user.service';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    constructor(public _currentUserService: CurrentUserService) { }

    private contractAddress = '0xaa0E6Fd8113F168a328ad8de99F1c0BE8b2e667c';

    public qrUrl: string;

    showPopupModal = false;

    ngOnInit(): void {
        this.qrUrl = this._currentUserService.user.walletAddress;
    }

    showPopup() {
        this.showPopupModal = true;
    }
}
