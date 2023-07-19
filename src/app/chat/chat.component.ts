import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Rest} from "../service/rest";
import {Ping} from "../interface/Ping";
import {MessageComponent} from "../message/message.component";
import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  isOpen: boolean = false;
  name: string | null = null
  roomId: string | null = null
  chatContainer: HTMLElement | null = null;

  constructor(private router: Router, private rest: Rest, private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
     this.roomId = localStorage.getItem("roomId") as string
     this.name = localStorage.getItem("name") as string
     this.chatContainer = document.getElementById("chat-container") as HTMLElement;
     this.getChat(this.roomId )
  }
  homePage() {
    this.router.navigate([''])
  }

  toggleComponent() {
    this.isOpen = true;
  }

  getChat(roomId: string) {
    if (roomId ) {
      this.rest.sendGetRequest(roomId).subscribe(
        (response) => {
          if(response.roomId) {
            response.pings.forEach((ping: Ping) => {
              this.addMessage(ping)
            })
          } else {
            console.log("Try after some time")
          }
        },
        (error) => {
          console.error("An error occurred:", error);
        },
        () => {
          console.log("Done");
        }
      );
    }
  }

  addMessage(data: Ping): void {
    const messageClass: string = (data.senderName === this.name) ? "outgoing" : "incoming";

    const componentFactory = this.resolver.resolveComponentFactory(MessageComponent);

    const componentRef = this.viewContainerRef.createComponent(componentFactory);

    componentRef.instance.messageClass = messageClass;
    componentRef.instance.senderName = data.senderName;
    componentRef.instance.messageText = data.message;

    if (this.chatContainer) {
      this.chatContainer.appendChild(componentRef.location.nativeElement);
    }
  }
}
