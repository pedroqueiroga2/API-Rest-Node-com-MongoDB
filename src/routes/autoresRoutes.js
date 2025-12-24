import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/Autor", AutorController.listarAutores)
  .get("/Autor/:id", AutorController.listarAutorPorId)
  .post("/Autor", AutorController.cadastrarAutor)
  .put("/Autor/:id", AutorController.atualizarAutor)
  .delete("/Autor/:id", AutorController.excluirAutor)

export default router;   