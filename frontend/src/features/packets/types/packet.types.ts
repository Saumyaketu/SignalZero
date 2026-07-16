export interface ActivePacket {
  packetId: string;
  route: string[];
  currentHop: number;
  payload: string;
}
