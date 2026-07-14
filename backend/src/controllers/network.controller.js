import networkService from "../services/network.service.js";

export const getNetwork = (req, res) => {
  res.json({
    success: true,
    nodes: networkService.getAllNodes(),
  });
};

export const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    network: "Healthy",
    timestamp: Date.now(),
  });
};
