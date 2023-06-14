import express from "express";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();

app.use("/", globalRouter);
app.use("/user", userRouter);

app.use(express.static("public"));
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");

app.listen(PORT, () => console.log(`✔ Server listening on port ${PORT}`));
