import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
    selector: 'app-new-sent',
    templateUrl: './set-new-sent.component.html',
    styleUrls: ['../auth.scss']
})

export class PasswordSentComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {

    }

    returnMain() {
        this.router.navigate(['/auth/']);
    }

}
