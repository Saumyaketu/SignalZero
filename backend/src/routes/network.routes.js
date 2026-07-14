import express from "express";

import { healthCheck, getNetwork } from "../controllers/network.controller.js";

const router = express.Router();

router.get("/health", healthCheck);

router.get("/nodes", getNetwork);

export default router;
