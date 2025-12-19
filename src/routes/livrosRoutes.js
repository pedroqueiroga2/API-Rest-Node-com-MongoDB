import express from "express";
import livroController from "../controllers/livroController.js";

const routes = express.Router(); // metodo express que lida com rotas

routes.get("/livros", livroController.listarLivros);

export default routes;