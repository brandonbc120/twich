import axios from "axios";
import { Response } from "express";


// const url: string = process.env.API_URL + "games/top";

interface Game {
  id: string;
  name: string;
  box_art_url: string;
}

const apiTwich = async (res: Response): Promise<void> => {
  const API = process.env.API_URL + "/games/top";
  try {
    const resultGame = await axios(API, {
      method: "GET",
      headers: {
        "Client-ID": process.env.CLIENT_ID!,
        Authorization: "Bearer " + process.env.AUTHORIZATION,
      },
    });
    
    const games: [Game] = resultGame.data;
    res.status(200).json(games);
  } catch (error) {
    res.send(error)
  }
};

export default apiTwich;
