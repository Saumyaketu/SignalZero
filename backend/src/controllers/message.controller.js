import messageService from "../services/message.service.js";
import packetProcessor from "../services/packetProcessor.service.js";

export const sendMessage = (req, res) => {
  const { source, destination, payload } = req.body;

  if (!source || !destination || !payload) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  const packet = messageService.sendMessage(source, destination, payload);

  if (!packet) {
    return res.status(404).json({
      success: false,
      message: "Route not found",
    });
  }

  res.status(201).json({
    success: true,
    packet,
  });
};

export const processPacket = (req, res) => {
  const packet = packetProcessor.processNextPacket();

  if (!packet) {
    return res.json({
      success: true,
      message: "Queue Empty",
    });
  }

  res.json({
    success: true,
    packet,
  });
};
