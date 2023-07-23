import { RxStompConfig } from '@stomp/rx-stomp';
import {environment} from "../../environments/environment";

export const StompConfig: RxStompConfig = {

  brokerURL: environment.socketUrl,

  // connectHeaders: {},
  //
  // heartbeatIncoming: 0,
  // heartbeatOutgoing: 20000,
  //
  // reconnectDelay: 200,

  debug: (msg: string): void => {
    console.log(new Date(), msg);
  },
};
