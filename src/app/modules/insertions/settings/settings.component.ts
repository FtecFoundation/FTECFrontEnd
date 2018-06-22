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

  constructor(private _imageService: ImageService, private _showModal: ShowModalService) {
  }

  ngOnInit() {
  }

  showModal() {
    this._showModal.showModal = true;
}

    uploadFile($event) {
        const reader = new FileReader();
        if ($event.target.files && $event.target.files.length > 0) {
            const file = $event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this._imageService.setImage(reader.result.split(',')[1]).subscribe(data => {
                    console.log(data);
                });
            };
        }
    }
}
