import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {NavigationStart, Router} from '@angular/router';
import {TitlesService} from '../../core/services/titles.service';
import {ShowModalService} from '../not-active/show-modal.service';
import {ImageService} from '../../core/services/image.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @ViewChild('profileImage') image: ElementRef;

    currentTitle: string;
    profileImage: string;

  constructor(private _accountService: AccountService,
              private router: Router,
              public _titlesService: TitlesService,
              public _showModalService: ShowModalService,
              private _imageService: ImageService) { }

  ngOnInit() {
      this._imageService.getImage().subscribe(data => {
          this.image.nativeElement.src = URL.createObjectURL(data);
      });
  }

    showUser() {
        const accInfo = document.querySelector('.user-account-block');

        accInfo.classList.toggle('is-active');
    }

    showThemeList() {
        const themesBlock = document.querySelector('.aside');

        themesBlock.classList.toggle('is-active');
    }

    showSidebar() {
        const dropdown = document.querySelector('.dropdown-button'),
            sidebar = document.querySelector('.sidebar');

        dropdown.classList.toggle('is-active');
        sidebar.classList.toggle('is-active');
    }

    logout() {
      this._accountService.logoutUser().subscribe(() => {
          this.router.navigate(['']);
      });
    }

    showModal() {
        this._showModalService.showModal = true;
    }

}
