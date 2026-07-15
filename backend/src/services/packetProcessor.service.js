import packetService from "./packet.service.js";

class PacketProcessor {
  processNextPacket() {
    const packet = packetService.dequeue();

    if (!packet) {
      return null;
    }

    packet.status = "ROUTING";

    return packet;
  }
}

export default new PacketProcessor();
