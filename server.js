import express from "express";
import http from "http";
import socket from "socket.io";
import page from "./api/page";
import ws from "./api/ws";
import websocket from "./api/websocket";

let app = express();

const port = 8080;

app.server = http.createServer(app);

app.use((req,res,next) =>{
    //    req.io = io;
    console.log("Middleware is called-We need to intercept for setting socket");
    next();
});

app.use("/", ws);
app.use("/", page);
app.use("/", socket);

app.server.listen(port, () => {
  console.log("Server running on port", port);
});

export default app;
