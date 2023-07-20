import { RxStompConfig } from '@stomp/rx-stomp';

export const StompConfig: RxStompConfig = {

  brokerURL: 'ws://localhost:8080/group-dots-websocket',

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
