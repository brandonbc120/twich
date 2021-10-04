import express, { Request, Response, Application } from "express";
import { urlencoded, json } from 'body-parser';
import dotenv from "dotenv"
import routes from "./routes/index";
import connectionMG from "./db/connection"
// import pool from "./dbconfigpotsgres/pgconnection"


dotenv.config()

const app: Application = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response): void => {
  res.send("typescrip");
});

app.use(urlencoded({ extended: true }));
app.use(json());

routes(app);

app.listen(PORT, (): void => {
  console.log(`Server Running port ${PORT}`);
});


connectionMG().then((connected: boolean) => {
  if (connected) {
      console.log('runnig');
  } else {
    console.log('Error mongo db');
  }
});

// const dbConnect = () => {
//   pool.connect((err:any, client, done)  =>{
//     if(err) throw new Error(err);
//     console.log("Connected");
    
//   })
// }

