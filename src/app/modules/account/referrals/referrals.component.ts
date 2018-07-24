import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {
  @ViewChild('uploader') inputImage: ElementRef;
    private imageSrc = '';

  tabLvl1 = true;
  tabLvl2 = false;
  tabLvl3 = false;

  showPopupModal = false;


  ngOnInit() {
  }

  showTab1() {
    this.tabLvl2 = false;
    this.tabLvl3 = false;
    this.tabLvl1 = true;
  }

  showTab2() {
    this.tabLvl1 = false;
    this.tabLvl3 = false;
    this.tabLvl2 = true;
  }

  showTab3() {
    this.tabLvl1 = false;
    this.tabLvl2 = false;
    this.tabLvl3 = true;
  }


  showPopup() {
    this.showPopupModal = true;
  }

}
