import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sent',
  templateUrl: './restore-sent.component.html',
  styleUrls: ['../auth.scss']
})

export class EmailSentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  returnMain() {
    this.router.navigate(['/auth/']);
  }

}
