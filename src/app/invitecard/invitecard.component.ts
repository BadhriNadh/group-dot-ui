import { Component } from '@angular/core';
import {ChatComponent} from "../chat/chat.component";

@Component({
  selector: 'app-invitecard',
  templateUrl: './invitecard.component.html',
  styleUrls: ['./invitecard.component.css']
})
export class InvitecardComponent {

  constructor( private chatComponent : ChatComponent) {
  }
  invite(contact: String) {
    this.chatComponent.isOpen = false;
  }

  cancel() {
    this.chatComponent.isOpen = false;
  }
}
