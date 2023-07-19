import {Ping} from "./Ping";

export interface Chat {
  roomId: string
  pings: Ping[]
}
