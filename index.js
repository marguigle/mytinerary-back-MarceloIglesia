import "dotenv/config.js";
import express from "express";
import indexRouter from "./router/indexRouter.js";
import cors from "cors";
import "./config/database.js";
const server = express();
server.use("/", indexRouter);

server.listen(process.env.PORT, () => {
  console.log("El servisor esta corriendo en el puerto " + process.env.PORT);
});
server.get("/", (req, res, next) => {
  res.send(console.log("bienvenido a mi servidor en /"));
});
