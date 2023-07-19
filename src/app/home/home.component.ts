import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Rest} from "../service/rest";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private rest: Rest) { }

  joinChat(name: string, roomId: string) {
    if (name && roomId) {
      this.rest.sendJoinRequest(roomId).subscribe(
        (response) => {
          if (roomId === response.roomId) {
            localStorage.setItem("name", name);
            localStorage.setItem("roomId", response.roomId);
            this.router.navigate(['chat']);
            console.log(response.roomId)
          } else {
            console.error("Invalid response");
          }
        },
        (error) => {
          console.error("An error occurred:", error);
        },
        () => {
          console.log("Done");
        }
      );
    } else {
      console.error("Invalid name or room ID");
    }
  }

  createChat(name: string) {
    if (name ) {
      this.rest.sendCreateRequest(name).subscribe(
        (response) => {
          if(response.roomId) {
            localStorage.setItem("name", name);
            localStorage.setItem("roomId", response.roomId);
            this.router.navigate(['chat'])
            console.log(response.roomId)
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
}
