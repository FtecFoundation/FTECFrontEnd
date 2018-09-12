import {Component, Input, OnInit} from '@angular/core';
import {CurrentUserService} from '../../../core/services/current-user.service';
import {AvailableExchanges} from '../../insertions/arbitrage/available-exchanges';
import {PaymentService} from "../../../core/services/payment.service";
import {AddressInfo} from "./address-info";
import {NotifyService} from "../../../core/notify/notify.service";
import {Notify} from "../../../core/notify/notifications";

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    constructor(public _currentUserService: CurrentUserService, private _paymentService: PaymentService,
                private _notifyService: NotifyService) {
    }

    addresses: AddressInfo[];
    currencies: string[] = ['BTC', 'ETH', 'FTEC'];
    currentCurrency: string;
    errorWalletAsset: boolean = false;
    showQR: boolean = false;

    public qrUrl: string;

    showPopupModal = false;

    ngOnInit(): void {
        this.qrUrl = this._currentUserService.user.walletAddress;
        this._paymentService.getAddress().subscribe(data => {
            this.addresses = data;
        });
        this.currentCurrency = this._currentUserService.user.currentPaymentScope;
    }

    showPopup() {
        this.showPopupModal = true;
    }

    refresh(paymentId: number) {
        this._paymentService.refreshPaymentStatus(paymentId).subscribe(data => console.log(data));
    }

    generateWalletAddress() {
        if (this.currentCurrency)
            this._paymentService.generateAddress(this.currentCurrency).subscribe(data => {
                this.addresses[this.currentCurrency] = {'address': data};
            });
        else this.errorWalletAsset = true;
    }

    chooseCurrentCurrency(currency: string) {
        this.currentCurrency = currency;
    }

    submitCurrentCurrency() {
        this._paymentService.changeCurrentCurrency(this.currentCurrency).subscribe(data => {
            if (data) {
                this._currentUserService.user.currentPaymentScope = this.currentCurrency;
                this._notifyService.addNotification(new Notify(this._notifyService.lastId, 'Success!',
                    'Your current payment asset was successfully changed', 'success'));

            }
        });
    }
}
