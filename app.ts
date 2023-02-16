import express, { Application } from "express";
import cors from "cors";
import router from "./route/user.route";
import morgan from "morgan";

const appConfig = (app: Application) => {
  // MIDDLE-WARES
  app.use(express.json()).use(cors()).use(morgan("dev"));

  // ROUTES
  app.use("/api/auth", router);
};

export default appConfig;
