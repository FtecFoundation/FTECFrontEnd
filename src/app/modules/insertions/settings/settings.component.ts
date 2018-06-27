import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../../core/services/image.service';
import { ShowModalService } from '../../not-active/show-modal.service';

@Component({
  selector: 'app-social',
  templateUrl: './settings.component.html',
  styleUrls: ['../insertions.scss', './settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @ViewChild('uploader') inputImage: ElementRef;
    private imageSrc = '';

  constructor(private _imageService: ImageService, private _showModal: ShowModalService) {
  }

  ngOnInit() {
  }

  showModal() {
    this._showModal.showModal = true;
}

    handleInputChange(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        const pattern = /image-*/;
        const reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        const reader = e.target;
        this.imageSrc = reader.result;
        this._imageService.setImage(this.imageSrc).subscribe(data => {
            console.log(data);
        });
    }
}
