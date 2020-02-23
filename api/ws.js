import { Router } from "express";
import { listPlayers } from "../service";
import { listGames } from "../service";
import { createNewGame } from "../service";
import { getGameStatus } from "../service";
import { placeShip } from "../service";
import { attack } from "../service";

const router = new Router();

router.get("/ws/info", async (req, res) => {
  try {
    res.json({
      success: true,
      messsage: "Success",
      result: "BattleField Game Challenge !!"
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.get("/ws/players", async (req, res) => {
  try {
    const result = await listPlayers(req.db);
    res.json({ success: true, messsage: "Success", result: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.get("/ws/games", async (req, res) => {
  try {
    const result = await listGames(req.db);
    res.json({ success: true, messsage: "Success", result: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.get("/ws/games/state", async (req, res) => {
  try {
    const result = "To be implemented";
    res.json({ success: true, messsage: "Success", result: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.put("/ws/games/placeship", async (req, res) => {
  try {
    const result = "To be implemented";
    res.json({ success: true, messsage: "Success", result: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.put("/ws/games/attach", async (req, res) => {
  try {
    const result = "To be implemented";
    res.json({ success: true, messsage: "Success", result: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.post("/ws/games/create", async (req, res) => {
  try {
    const result = "To be implemented";
    res.json({ success: true, messsage: "Success", result: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
