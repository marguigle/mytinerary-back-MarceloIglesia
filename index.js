import express from "express";
import indexRouter from "./router/indexRouter.js";

const server = express();
server.use("/api", indexRouter);

server.listen(3010, () => {
  server.get("/", (request, response, next) => {
    response.send("Bienvenido a mi servidor en /");
  });

  console.log("El servisor esta corriendo en el puerto 3010");
});
