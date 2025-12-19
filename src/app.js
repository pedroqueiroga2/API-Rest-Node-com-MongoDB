import express from "express";
import conectaNaDatabase from "./config/dbconnect.js"
import routes from "./routes/index.js"
const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro)
});

conexao.once("open", () => {
    console.log("conexão feita com sucesso");
});
const app = express();
routes(app);




app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro enviado");
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});
app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].Nome = req.body.Nome;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("deletado com sucesso");
});
export default app;

