import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../../core/services/image.service';
import {ShowModalService } from '../../not-active/show-modal.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['../insertions.scss', './faq.component.scss']
})
export class FaqComponent implements OnInit {
  @ViewChild('uploader') inputImage: ElementRef;
    private imageSrc = '';


  ngOnInit() {
  }


}
