import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../../../core/services/image.service';

@Component({
  selector: 'app-refferals',
  templateUrl: './refferals.component.html',
  styleUrls: ['../insertions.scss', './refferals.component.scss']
})
export class RefferalsComponent implements OnInit {
  @ViewChild('uploader') inputImage: ElementRef;
    private imageSrc = '';

  tabLvl1 = true;
  tabLvl2 = false;
  tabLvl3 = false;

  showPopupModal = false;


  ngOnInit() {
  }

  showTab1() {
    this.tabLvl2= false;
    this.tabLvl3= false;
    this.tabLvl1= true;
  }

  showTab2() {
    this.tabLvl1= false;
    this.tabLvl3= false;
    this.tabLvl2= true;
  }

  showTab3() {
    this.tabLvl1= false;
    this.tabLvl2= false;
    this.tabLvl3= true;
  }


  showPopup() {
    this.showPopupModal = true;
  }

}
