import messageService from "../services/message.service.js";

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
