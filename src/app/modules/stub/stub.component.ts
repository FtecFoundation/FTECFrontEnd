import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.scss']
})

export class StubComponent implements OnInit {
  timeLeft: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
