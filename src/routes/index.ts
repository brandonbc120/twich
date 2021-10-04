import { Application } from "express";
import gamesRouter from "./games-router";

const createRoutes = (app: Application): void => {
  app.use("/api/games", gamesRouter);
};

export default createRoutes;
