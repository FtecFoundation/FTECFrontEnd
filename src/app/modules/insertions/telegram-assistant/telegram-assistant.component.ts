import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './telegram-assistant.component.html',
  styleUrls: ['../insertions.scss', './telegram-assistant.component.scss']
})
export class TelegramAssistantComponent implements OnInit {
  qrUrl = 'tg://resolve?domain=';

  constructor() {
  }

  ngOnInit() {
  }

}
