import { v4 as uuid } from "uuid";

export default class Packet {
  constructor({
    source,
    destination,
    payload,
    route,
    priority = "NORMAL",
    ttl = 10,
  }) {
    this.packetId = uuid();
    this.source = source;
    this.destination = destination;
    this.payload = payload;
    this.route = route;
    this.currentHop = 0;
    this.priority = priority;
    this.ttl = ttl;
    this.status = "QUEUED";
    this.createdAt = Date.now();
  }
}
