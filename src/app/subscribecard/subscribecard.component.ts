import { Component } from '@angular/core';
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-subscribecard',
  templateUrl: './subscribecard.component.html',
  styleUrls: ['./subscribecard.component.css']
})
export class SubscribecardComponent {

  constructor(private homeComponent: HomeComponent) {}
  invite(value: string) {
    this.homeComponent.isOpen = false
  }

  cancel() {
    this.homeComponent.isOpen = false
  }
}
