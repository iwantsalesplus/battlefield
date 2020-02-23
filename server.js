import express from "express";
import http from "http";
import SocketIO from "socket.io";
import Repo from "./repository";
import page from "./api/page";
import ws from "./api/ws";
import websocket from "./api/websocket";

const port = 8080;

const app = express();
const server = http.Server(app);
const io = new SocketIO(server);

Repo(async db => {
  app.use((req, res, next) => {
    req.io = io;
    req.db = db;
    next();
  });
  app.use("/", ws);
  app.use("/", page);
  app.use("/", websocket);

  server.listen(port, () => {
    console.log("Server running on port", port);
  });
});

export default app;
