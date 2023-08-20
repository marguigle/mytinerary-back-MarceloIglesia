import express from "express";
import indexRouter from "./router/indexRouter.js";

const server = express();
const PORT = 3000;
server.listen(PORT, () => {
  console.log("server on port " + PORT);
});

server.get("/", (req, res, next) => {
  res.send("bienvenido a mi servidor en /");
});

server.use("/api", indexRouter);
