import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-info-popup',
  animations: [
      trigger(
          'enterAnimation', [
              transition(':enter', [
                  style({transform: 'translateY(-100%)'}),
                  animate('500ms ease', style({transform: 'translateY(0%)'}))
              ]),
              transition(':leave', [
                  style({transform: 'translateY(0%)'}),
                  animate('500ms ease', style({transform: 'translateY(-100%)'}))
              ])
          ]
      )
  ],
  template: `
      <div class="msg-line">
          <div class="msg-line__content">
              <div class="msg-item">
                  <div class="msg-item__text">
                      <p>{{collapsedText}}</p>
                      <div style=" overflow-y: hidden; transition: max-height ease 500ms;" [ngStyle]="{'max-height':opened?'400px':'0px'}">
                        <div style="margin-top: .938em;" *ngIf="opened" [@enterAnimation]>
                            <ul>
                                <li *ngFor="let i of openedText">{{i}}</li>
                            </ul>
                        </div>
                      </div>
                  </div>
              </div>
              <button type="button" (click)="opened=!opened" [ngClass]="{'msg-line__open': !opened, 'msg-line__close': opened}"></button>
          </div>
      </div>
  `,
  styleUrls: ['./info-popup.component.scss']
})
export class InfoPopupComponent implements OnInit {

  @Input()
  collapsedText: string;
  @Input()
  openedText: string[];

  opened: boolean
  constructor() { }

  ngOnInit() {
  }

}
