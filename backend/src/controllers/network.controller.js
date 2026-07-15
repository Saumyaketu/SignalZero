import networkService from "../services/network.service.js";
import routingEngine from "../routing/routingEngine.js";

export const getNetwork = (req, res) => {
  res.json({
    success: true,
    totalNodes: networkService.getAllNodes().length,
    nodes: networkService.getAllNodes(),
  });
};

export const getRoute = (req, res) => {
  const { source, destination } = req.query;
  const nodes = networkService.getAllNodes();
  const route = routingEngine.getRoute(source, destination, nodes);

  if (!route) {
    return res.status(404).json({
      success: false,
      message: "No route found",
    });
  }

  res.json({
    success: true,
    hops: route.length - 1,
    route,
  });
};

export const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    network: "Healthy",
    timestamp: Date.now(),
  });
};
