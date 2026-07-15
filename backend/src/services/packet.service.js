class PacketService {
  constructor() {
    this.packets = [];
  }

  create(packet) {
    this.packets.push(packet);

    return packet;
  }

  getAll() {
    return this.packets;
  }

  remove(packetId) {
    this.packets = this.packets.filter(
      (packet) => packet.packetId !== packetId,
    );
  }
}

export default new PacketService();
