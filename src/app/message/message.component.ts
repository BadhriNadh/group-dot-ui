import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div class="message" [ngClass]="messageClass">
      <div class="message-content">
        <div class="message-name">{{ senderName }}</div>
        <div class="message-text">{{ messageText }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  senderName: any;
  messageText: any;
  messageClass: any;

}
