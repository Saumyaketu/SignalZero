import Packet from "../models/Packet.js";
import packetService from "./packet.service.js";
import networkService from "./network.service.js";
import routingEngine from "../routing/routingEngine.js";

class MessageService {
  sendMessage(source, destination, payload) {
    const nodes = networkService.getAllNodes();
    const route = routingEngine.getRoute(source, destination, nodes);

    if (!route) {
      return null;
    }

    const packet = new Packet({
      source,
      destination,
      payload,
      route,
      currentHop: 0,
      totalHops: route.length - 1,
      status: "routing",
    });

    packetService.enqueue(packet);

    return packet;
  }
}

export default new MessageService();
