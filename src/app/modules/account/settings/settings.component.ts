import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../../core/services/image.service';
import {ShowModalService} from '../../not-active/show-modal.service';
import {CurrentUserService} from '../../../core/services/current-user.service';

@Component({
    selector: 'app-social',
    templateUrl: './settings.component.html',
    styleUrls: ['../../../../assets/styles/common.scss', './settings.component.scss']
})
export class SettingsComponent implements OnInit {
    @ViewChild('uploader') inputImage: ElementRef;
    @ViewChild('image') image: ElementRef;
    private imageSrc = '';
    private imageType: string;
    preloader = false;

    constructor(private _imageService: ImageService, private _showModal: ShowModalService, public _currentUserService: CurrentUserService) {
    }

    step1 = true;
    step2 = false;
    step3 = false;

    ngOnInit() {
    }

    showModal() {
        this._showModal.showModal = true;
    }

    showNextStep() {
        this.step1 = false;
        this.step2 = !this.step2;
    }

    showLastStep() {
        this.step2 = false;
        this.step3 = !this.step2;
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
