import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../../core/services/image.service';
import {ShowModalService } from '../../not-active/show-modal.service';

@Component({
  selector: 'app-refferals',
  templateUrl: './refferals.component.html',
  styleUrls: ['../insertions.scss', './refferals.component.scss']
})
export class RefferalsComponent implements OnInit {
  @ViewChild('uploader') inputImage: ElementRef;
    private imageSrc = '';


  ngOnInit() {
  }


}
