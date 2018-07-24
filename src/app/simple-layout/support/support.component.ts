import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../core/services/image.service';
import { ShowModalService } from '../../modules/not-active/show-modal.service';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  @ViewChild('uploader') inputImage: ElementRef;


  ngOnInit() {
  }

}
