import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Room } from '../interface/Room';
import {Chat} from "../interface/Chat";

@Injectable()
export class Rest{
  host = "http://localhost:8080/";
  constructor(private http: HttpClient) {
  }
  sendJoinRequest( roomId: string): Observable<Room> {
    return this.http.get<Room>(this.host+'room/join/'+roomId );
  }

  sendCreateRequest(name: string): Observable<Room> {
    return this.http.get<Room>(this.host+'room/create/'+name)
  }

  sendGetRequest(name: string): Observable<Chat> {
    return this.http.get<Chat>(this.host+'room/get/'+name)
  }
}
