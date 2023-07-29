import { Component } from '@angular/core';
import {HomeComponent} from "../home/home.component";
import {Rest} from "../service/rest";

@Component({
  selector: 'app-subscribecard',
  templateUrl: './subscribecard.component.html',
  styleUrls: ['./subscribecard.component.css']
})
export class SubscribecardComponent {

  constructor(private homeComponent: HomeComponent, private rest: Rest) {}
  invite(value: string) {
    const invite = {
      mail: value
    }
    this.rest.sendSubEmail(invite).subscribe(
      (response) => {
        console.log(response)
      },
    (error) => {
        console.log(error)
      }
    )
    this.homeComponent.isOpen = false
  }

  cancel() {
    this.homeComponent.isOpen = false
  }
}
