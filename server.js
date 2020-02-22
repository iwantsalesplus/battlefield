import express from "express";
import http from "http";

let app = express();


const port = 8080;

app.server = http.createServer(app);

app.server.listen(port, () => {
  console.log("Server running on port", port);
});
export default app;
