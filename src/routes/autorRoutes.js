import express from "express";
import autorController from "../controllers/autorController.js";

const routes = express.Router();

routes.post("/Autor", autorController.criarAutor); 
routes.get("/Autor", autorController.listarAutor);
routes.get("/Autor/:id", autorController.listarAutorporId);
export default routes;