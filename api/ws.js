import { Router } from "express";

const router = new Router();

router.get("/ws/info", async (req, res) => {
  try {
    res.json({ success: true, messsage: "Success", result: "BattleField Game Challenge !!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
