import {Injectable} from '@angular/core';
import {AccountService} from './account.service';
import {User} from '../models/user';
import {ImageService} from './image.service';
import {EtherscanService} from './etherscan.service';

@Injectable()
export class CurrentUserService {
    currentUser: User;

    constructor(private _accountService: AccountService, private _etherscanService: EtherscanService) {
    }

    getCurrentUser() {
        this._accountService.getUser().subscribe(data => {
            this.currentUser = data;
            if (!this.currentUser.walletAddress) { this.currentUser.balance = 0; } else { this._etherscanService.getBalance(this.currentUser.walletAddress).subscribe(balance => {
                this.user.balance = balance;
            });
            }
        });
    }

    get user(): User {
        return this.currentUser;
    }
}
