import express from "express";
import { home, join } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
export default globalRouter;
