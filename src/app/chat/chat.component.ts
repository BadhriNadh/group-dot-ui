import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Rest} from "../service/rest";
import {Ping} from "../interface/Ping";
import {MessageComponent} from "../message/message.component";
import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import {StompService} from "../stomp/stomp.service";
import {Subscription} from "rxjs";
import { Message } from '@stomp/stompjs';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked{
  isOpen: boolean = false;
  name?: string
  roomId?: string
  chatContainer?: HTMLElement
  private topicSubscription!: Subscription;

  constructor(
    private router: Router,
    private rest: Rest,
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private stompService: StompService
  ) { }

  ngOnInit(): void {
     this.setVariables()
     this.getChat()
     this.subscription()
  }

  setVariables(): void{
    this.roomId = localStorage.getItem("roomId") as string
    this.name = localStorage.getItem("name") as string
    this.chatContainer = document.getElementById("chat-container") as HTMLElement;
  }
  homePage() {
    this.ngOnDestroy()
    this.router.navigate([''])
  }

  toggleComponent() {
    this.isOpen = true;
  }

  getChat() {
    if (this.roomId ) {
      this.rest.sendGetRequest(this.roomId).subscribe(
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
      this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    }
  }

  ngAfterViewChecked() {
    if (this.chatContainer) {
      this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    }
  }

  subscription() {
    this.topicSubscription = this.stompService
      .watch('/group-dots-ui/receive/' + this.roomId)
      .subscribe((message:Message) => {
        const receivedPing: Ping = JSON.parse(message.body);
        this.addMessage(receivedPing);
      });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  onSendMessage(message: HTMLInputElement, language: string) {
    if(message) {
      const ping: Ping = {
        senderName: this.name!,
        message: message.value,
        language: language,
        timeStamp: new Date(),
      };

      this.stompService.publish({destination: '/group-dots-api/send/' + this.roomId, body: JSON.stringify(ping)});
      message.value = "";
    }
  }
}
