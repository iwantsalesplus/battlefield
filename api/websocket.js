import { Router } from "express";

const router = new Router();
//SERVER listens to connection/shot/leave/disconnect
//SERVER emmits update/notification/gameover

router.get("/websocket/start", async (req, res) => {
  try {
    req.io.on("connection", s => {
      s.join("Waiting for someone");

      s.on("shot", p => {
        console.log("Shot event");
      });

      s.on("leave", () => {
        console.log("Leave event");
      });

      s.on("disconnect", () => {
        console.log("Disconnect event");
      });

    });
    res.sendFile('game.html', {root: 'ui'});
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
