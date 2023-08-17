import "dotenv/config.js";
import "./config/database.js";
import express from "express";
import indexRouter from "./router/indexRouter.js";
import cors from "cors";
const server = express();
server.use("/", indexRouter);
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => {
  console.log("server ready on port " + process.env.PORT);
});
server.get("/", (req, res, next) => {
  res.send(console.log("bienvenido a mi servidor en /"));
});
