import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../../core/services/image.service';
import {ShowModalService} from '../../not-active/show-modal.service';
import {CurrentUserService} from '../../../core/services/current-user.service';

@Component({
    selector: 'app-social',
    templateUrl: './settings.component.html',
    styleUrls: ['../insertions.scss', './settings.component.scss']
})
export class SettingsComponent implements OnInit {
    @ViewChild('uploader') inputImage: ElementRef;
    @ViewChild('image') image: ElementRef;
    private imageSrc = '';
    private imageType: string;

    constructor(private _imageService: ImageService, private _showModal: ShowModalService, public _currentUserService: CurrentUserService) {
    }

    ngOnInit() {
    }

    showModal() {
        this._showModal.showModal = true;
    }

    handleInputChange(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        if (file !== undefined) {
            this.imageType = file.type;
            this._imageService.setImage(file, this.imageType).subscribe(() => {
                this._currentUserService.getCurrentUser();
            });
        }
    }
}
