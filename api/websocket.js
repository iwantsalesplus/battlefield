
import { Router } from "express";

const router = new Router();

router.get("/socket/index", async (req, res) => {
  try {
    res.sendFile('game.html', {root: 'ui'});
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
