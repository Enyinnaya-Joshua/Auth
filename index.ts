import express, { Application, Response, Request } from "express";
import appConfig from "./app";
import dbConnection from "./config/db";

const port: number = 4040;

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "server is up and running",
  });
});

dbConnection();

appConfig(app);

const server = app.listen(port, () => {
  console.log(`listening to ${port}`);
});
