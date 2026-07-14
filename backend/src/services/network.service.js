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
    this.buildTopology();
    return node;
  }

  removeNode(socketId) {
    this.nodes.delete(socketId);
    this.buildTopology();
  }

  getNode(socketId) {
    return this.nodes.get(socketId);
  }

  getAllNodes() {
    return [...this.nodes.values()];
  }

  buildTopology() {
    const nodes = [...this.nodes.values()];

    nodes.forEach((node) => {
      node.neighbors = [];
    });

    for (let i = 0; i < nodes.length; i++) {
      if (i > 0) {
        nodes[i].neighbors.push(nodes[i - 1].nodeId);
      }
      if (i < nodes.length - 1) {
        nodes[i].neighbors.push(nodes[i + 1].nodeId);
      }
    }
  }

  updateLastSeen(socketId) {
    const node = this.nodes.get(socketId);

    if (!node) return;

    node.lastSeen = Date.now();
  }
}

export default new NetworkService();
