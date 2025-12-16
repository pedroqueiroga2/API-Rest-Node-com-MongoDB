import express from "express";

const app = express();
const livros = [
    {
        id: 1,
        Nome: "Código Limpo"
    },
    {
        id: 2,
        Nome: "O pequeno príncipe"
    }
]
app.get("/", (req, res) =>{
res.status(200).send("curso de node.js");
});

app.get("/livros", (req, res) =>
    {
        res.status(200).json(livros);
        
    });

export default app;