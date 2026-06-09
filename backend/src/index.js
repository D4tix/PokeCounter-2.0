const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
const distPath = process.env.FRONTEND_DIST || path.join(__dirname, "..", "frontend", "dist");

if (distPath) {
  app.use(express.static(distPath));
}

if (!distPath) {
  app.get("/", (_req, res) => {
    res.send("Backend is running");
  });
}

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});