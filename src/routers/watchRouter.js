import express from "express";
import { watch } from "../controllers/watchController";

const watchRouter = express.Router();

watchRouter.get("/watch", watch);

export default watchRouter;
