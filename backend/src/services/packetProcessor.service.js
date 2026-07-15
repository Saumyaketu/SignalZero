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

  moveToNextHop(packet) {
    if (packet.currentHop < packet.route.length - 1) {
      packet.currentHop++;
    }

    return packet;
  }

  isDelivered(packet) {
    return packet.currentHop >= packet.route.length - 1;
  }
}

export default new PacketProcessor();
