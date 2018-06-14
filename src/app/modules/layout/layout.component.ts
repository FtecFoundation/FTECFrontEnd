import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showPopup = true;

  constructor() {
  }

  ngOnInit() {
  }


  showSidebar() {
    const dropdown = document.querySelector('.dropdown-button'),
      sidebar = document.querySelector('.sidebar');

    dropdown.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
  }


  openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('main-info');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('aside__item');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' is-active', '');
    }
    document.getElementById(tabName).style.display = 'flex';
    evt.currentTarget.className += ' is-active';
  }


  checkEvery() {
    const filterItems = document.getElementsByClassName('filter__container-block-item'),
      themesItem = document.getElementsByClassName('aside__item');
    let filterCounter = 0;



    filterCounter++;

    if (filterCounter % 2) {

      for (let i = 0; i < filterItems.length; i++) {
        filterItems[i].classList.add('is-active');
      }

    } else {
      for (let i = 0; i < filterItems.length; i++) {
        filterItems[i].classList.remove('is-active');
      }

    }
  }


}
