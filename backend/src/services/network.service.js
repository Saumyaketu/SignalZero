import { v4 as uuid } from "uuid";

class NetworkService {
  constructor() {
    this.nodes = new Map();
  }

  createNode(socketId, username = "Anonymous") {
    const node = {
      nodeId: uuid(),
      socketId,
      username,
      status: "online",
      neighbors: [],
      routingTable: {},
      storage: {
        used: 0,
        limit: 100,
      },
      lastSeen: Date.now(),
    };

    this.nodes.set(socketId, node);
    return node;
  }

  removeNode(socketId) {
    this.nodes.delete(socketId);
  }

  getNode(socketId) {
    return this.nodes.get(socketId);
  }

  getAllNodes() {
    return [...this.nodes.values()];
  }

  updateLastSeen(socketId) {
    const node = this.nodes.get(socketId);

    if (!node) return;

    node.lastSeen = Date.now();
  }
}

export default new NetworkService();
