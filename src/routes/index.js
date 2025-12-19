import express from "express";
import livros from "../controllers/livroController.js"
import livrosRoutes from "./livrosRoutes.js";
const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Curso de Node.js"));
    app.use(express.json()); //middleware, que converte as requisições enviadas como String em json para o servidor
    app.use(livrosRoutes);
};

export default routes;