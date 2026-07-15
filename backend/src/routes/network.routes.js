import express from "express";

import {
  healthCheck,
  getNetwork,
  getRoute,
} from "../controllers/network.controller.js";

const router = express.Router();

router.get("/health", healthCheck);

router.get("/nodes", getNetwork);
router.get("/route", getRoute);

export default router;
