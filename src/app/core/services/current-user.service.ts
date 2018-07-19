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
            this._etherscanService.getBalance('0xbcee1c08a1ee0774bee5ba89d40da324d9a3f9fc').subscribe(balance => {
                this.user.balance = balance;
            });
        });
    }

    get user(): User {
        return this.currentUser;
    }
}
