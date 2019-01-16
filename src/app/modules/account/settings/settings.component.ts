import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../../core/services/image.service';
import {ShowModalService} from '../../not-active/show-modal.service';
import {CurrentUserService} from '../../../core/services/current-user.service';
import {AccountService} from "../../../core/services/account.service";
import {SettingsService} from './settings.service';
import {RegistrationValidators} from '../../../auth/registration/registration.validators';
import {NotifyService} from '../../../core/notify/notify.service';
import {Notify} from '../../../core/notify/notifications';

@Component({
    selector: 'app-social',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    @ViewChild('uploader') inputImage: ElementRef;
    @ViewChild('image') image: ElementRef;
    private imageSrc = '';
    private imageType: string;
    preloader = false;
    public availibleLanguages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Korean', 'Chinese', 'Japanese', 'Swedish', 'Portuguese', 'Russian'];

    constructor(private _imageService: ImageService, private _showModal: ShowModalService, public _currentUserService: CurrentUserService,
                private _accountService: AccountService, private _settingsService: SettingsService, private _notifyService: NotifyService) {
    }

    enabled: boolean = false;
    qrUrl: string = '';

    ngOnInit() {
        if (this._currentUserService.user.twoStepVerification) this.enable2FA();
    }

    changeEmail(data: any){
        console.log(data);
        this._settingsService.changeEmail(data.email).subscribe((resp)=>{
            console.log("email was changed", resp);
            this._currentUserService.user.email=data.email;
            this._notifyService.addNotification(new Notify(this._notifyService.lastId, 'Success', 'Email was successfully changed', 'success'))
        });
    }

    changePassword(data: any){
        if(data.newPassword===data.newPasswordConfirm){
            this._settingsService.changePassword(data.currentPassword, data.newPassword).subscribe((resp)=>{
                console.log("password was changed", resp);
                this._notifyService.addNotification(new Notify(this._notifyService.lastId, 'Success', 'Password was successfully changed', 'success'))
            });
        }
    }
    showModal() {
        this._showModal.showModal = true;
    }

    enable2FA() {
        this._accountService.enable2FA().subscribe(data => {
            this.qrUrl = data;
            this.enabled = true;
        });
    }

    disable2FA() {
        this._accountService.disable2FA().subscribe(() => this.enabled = false);
    }

    deleteImage() {
        this._imageService.deleteImage().subscribe(() => this._currentUserService.user.imageName = '0.jpg');
    }

    handleInputChange(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        if (file.size > 5000000) {
            alert('File is too big. Please, choose file less than 5MB');
        } else if (file !== undefined) {
            this.preloader = true;
            this.imageType = file.type;
            this._imageService.setImage(file, this.imageType).subscribe(data => {
                this._currentUserService.user.imageName = data;
                this.preloader = false;
            });
        }
    }
}
