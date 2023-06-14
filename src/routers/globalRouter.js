import express from "express";
import path from "path";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) =>
    res.sendFile(path.join(__dirname + "../../index.html"))
);

export default globalRouter;
