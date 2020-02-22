import { Router } from "express";
import {findAllPlayers} from "../repository"; 
import {findAllGames} from "../repository"; 

const router = new Router();

router.get("/ws/info", async (req, res) => {
  try {
    res.json({ success: true, messsage: "Success", result: "BattleField Game Challenge !!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.get("/ws/players", async (req, res) => {
  try {
    const result = await findAllPlayers(req.db);
    res.json({ success: true, messsage: "Success", result: result});
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.get("/ws/games", async (req, res) => {
  try {
    const result = await findAllGames(req.db);
    res.json({ success: true, messsage: "Success", result: result});
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
