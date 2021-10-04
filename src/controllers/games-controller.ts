import { Request, Response } from "express";
import apiTwich from "../api/twich-api";
// import pool from "../dbconfigpotsgres/pgconnection";
import Games from "../db/schemas/games";

// apiTwich(res)

export const getGames = async (req: Request, res: Response): Promise<void> => {
  try {
    apiTwich(res);
  } catch (error) {
    res.send(error)
  }


  // try {
  //     const client  = await pool.connect()
  //     const sql = "SELECT * FROM twich"
  //     const {rows} = await client.query(sql)
  //     const todo = rows

  //     client.release()

  //     res.send(todo)
  // } catch (error) {
  //     res.status(400).send(error)
  // }
};

export const allGame = async (req: Request, res: Response): Promise<void> => {
    const games = await Games.find()
    res.send(games);
  };

export const createGame = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, box_art_url } = req.body;
    const game = await Games.create({
      name: name,
      box_art_url: box_art_url,
    });

    res.send(game);
  } catch (error) {
    res.send({ message: error });
  }
};

export const updatetGame = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.gameId;
    const { name, box_art_url } = req.body;
    const game = await Games.findOneAndUpdate(
      {
        _id: id,
      },
      {
        name,
        box_art_url,
      }
    );

    if (game) {
      res.send({ message: "update game" });
    } else {
      res.send(404).send({});
    }
  } catch (error) {
    res.send({ message: error });
  }
};

export const deleteGame = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.gameId;
    const game = await Games.deleteOne({
      _id: id,
    });

    if (game.deletedCount > 0) {
      res.send({ message: "delete game" });
    } else {
      res.status(404).send({});
    }
  } catch (error) {
    res.send({ message: error });
  }
};
