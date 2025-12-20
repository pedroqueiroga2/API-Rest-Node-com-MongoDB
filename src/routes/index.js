import express from "express";
import livrosRoutes from "./livrosRoutes.js";
import autorRoutes from "./autorRoutes.js"
const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Curso de Node.js"));
    app.use(express.json()); //middleware, que converte as requisições enviadas como String em json para o servidor
    app.use(livrosRoutes, autorRoutes);
};

export default routes;