import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-index-container',
  templateUrl: './chat-index-container.component.html',
  styleUrls: ['./chat-index-container.component.scss']
})
export class ChatIndexContainerComponent implements OnInit {

  @Input() channels: any[];

  constructor() { }

  ngOnInit() { }

}
