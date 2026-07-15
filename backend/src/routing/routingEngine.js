import { findShortestPath } from "./pathFinder.js";

class RoutingEngine {
  getRoute(sourceId, destinationId, nodes) {
    return findShortestPath(sourceId, destinationId, nodes);
  }
}

export default new RoutingEngine();
