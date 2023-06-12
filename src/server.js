import express from "express";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import watchRouter from "./routers/watchRouter";

const PORT = 4000;

const app = express();

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/watch", watchRouter);

app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");

app.listen(PORT, () => console.log(`✔ Server listening on port ${PORT}`));
