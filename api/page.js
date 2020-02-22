import { Router } from "express";

const router = new Router();

router.get("/assets/index", async (req, res) => {
  try {
    res.sendFile('game.html', {root: 'ui'});
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.get("/assets/css", async (req, res) => {
  try {
    res.sendFile('site.css', {root: 'ui/css'});
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.get("/assets/js", async (req, res) => {
  try {
    res.sendFile('client.js', {root: 'ui/js'});
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
