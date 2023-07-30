import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Room } from '../interface/Room';
import {Chat} from "../interface/Chat";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class Rest{
  host = environment.apiUrl;

  emailhost = environment.emailUrl;
  constructor(private http: HttpClient) {
  }
  sendJoinRequest( roomId: string): Observable<Room> {
    return this.http.get<Room>(this.host+'/room/join/'+roomId );
  }

  sendCreateRequest(name: string): Observable<Room> {
    return this.http.get<Room>(this.host+'/room/create/'+name)
  }

  sendGetRequest(name: string): Observable<Chat> {
    return this.http.get<Chat>(this.host+'/room/get/'+name)
  }

  sendSubEmail(sub: any): Observable<any>{
    return this.http.post(this.emailhost+'/production/subscribe', sub)
  }

  sendInviteEmail(invite: any): Observable<any>{
    return this.http.post(this.emailhost+'/production/invite', invite)
  }
}
