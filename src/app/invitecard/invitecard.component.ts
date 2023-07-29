import { Component } from '@angular/core';
import {ChatComponent} from "../chat/chat.component";

import {Rest} from "../service/rest";

@Component({
  selector: 'app-invitecard',
  templateUrl: './invitecard.component.html',
  styleUrls: ['./invitecard.component.css']
})
export class InvitecardComponent {

  constructor( private chatComponent : ChatComponent, private rest: Rest) {}

  invite(contact: string) {
    const invite ={
      mail: contact,
      roomId: localStorage.getItem("roomId")
    }
    this.rest.sendInviteEmail(invite).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )

    this.chatComponent.isOpen = false;
  }

  cancel() {
    this.chatComponent.isOpen = false;
  }
}
