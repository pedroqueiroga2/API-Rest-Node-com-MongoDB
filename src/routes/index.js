import express from "express";
import livros from "../controllers/livroController.js"

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Curso de Node.js"));
    app.use(express.json(), livros); //middleware, que converte as requisições enviadas como String em json para o servidor
};

export default routes;