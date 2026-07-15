import express from "express";
import {
  sendMessage,
  processPacket,
} from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send", sendMessage);
router.post("/process", processPacket);

export default router;
