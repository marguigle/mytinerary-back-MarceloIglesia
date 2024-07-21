import "dotenv/config.js";
import "./config/database.js";
import express from "express";
import indexRouter from "./router/indexRouter.js";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

server.get("/", (req, res, next) => {
  res.send("bienvenido a mi servidor en /");
});

server.use("/api", indexRouter);

server.listen(process.env.PORT, () => {
  console.log("server on port " + process.env.PORT);
});
