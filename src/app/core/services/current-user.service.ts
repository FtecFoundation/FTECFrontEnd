import {Injectable} from '@angular/core';
import {AccountService} from './account.service';
import {User} from '../models/user';
import {ImageService} from './image.service';

@Injectable()
export class CurrentUserService {
    currentUser: User;

    constructor(private _accountService: AccountService, private _imageService: ImageService) {
    }

    getCurrentUser() {
        this._accountService.getUser().subscribe(data => {
            this.currentUser = data;

            this._imageService.getImage().subscribe(img => {
                this.currentUser.imageName = URL.createObjectURL(img);
            });
        });
    }

    get user(): User {
        return this.currentUser;
    }
}
