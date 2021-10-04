import { Router } from "express";
import * as gamesController from "../controllers/games-controller";

const router = Router();

router.get("", gamesController.getGames);
router.get("/allgames", gamesController.allGame);
router.post("/create", gamesController.createGame)
router.put("/:gameId", gamesController.updatetGame)
router.delete("/delete/:gameId", gamesController.deleteGame)

export default router;
