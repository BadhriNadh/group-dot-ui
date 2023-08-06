import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Rest} from "../service/rest";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isOpen: boolean = false;
  isLoading: boolean = false;
  constructor(private router: Router, private rest: Rest) { }

  joinChat(name: string, roomId: string) {
    if (name && roomId) {
      this.isLoading = true
      this.rest.sendJoinRequest(roomId).subscribe(
        (response) => {
          if (roomId === response.roomId) {
            localStorage.setItem("name", name);
            localStorage.setItem("roomId", response.roomId);
            this.router.navigate(['chat']);
            console.log(response.roomId)
          } else {
            this.isOpen = true
          }
        },
        (error) => {
          if(error.status === 404){this.isOpen = true}
            console.error("An error occurred:", error);
        },
        () => {
          this.isLoading=false
        }
      );
    } else {
      this.isOpen = true
    }
  }

  createChat(name: string, roomId: string) {
    if (name && !roomId) {
      this.isLoading=true
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
          this.isLoading=true
        }
      );
    }else{
      this.isOpen = true
    }
  }

  toggleComponent() {
    this.isOpen = true;
  }
}
