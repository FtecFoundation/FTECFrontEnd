import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../../core/services/image.service';
import {ShowModalService} from '../../not-active/show-modal.service';
import {CurrentUserService} from '../../../core/services/current-user.service';
import {AccountService} from "../../../core/services/account.service";

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

    constructor(private _imageService: ImageService, private _showModal: ShowModalService, public _currentUserService: CurrentUserService,
                private _accountService: AccountService) {
    }

    enabled: boolean = false;
    qrUrl: string = '';

    ngOnInit() {
        if (this._currentUserService.user.twoStepVerification) this.enable2FA();
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
