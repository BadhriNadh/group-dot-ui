import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import {StompFactory} from "./stomp.factory";

@Injectable({
  providedIn: 'root',
  useFactory: StompFactory,
})
export class StompService extends RxStomp {
  constructor() {
    super();
  }
}
