import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import networkRoutes from "./routes/network.routes.js";
import messageRoutes from "./routes/message.routes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    project: "SignalZero",
    message: "Backend Running",
  });
});

app.use("/api/network", networkRoutes);
app.use("/api/message", messageRoutes);

export default app;
