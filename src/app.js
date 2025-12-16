import express from "express";

const app = express();
app.use(express.json()); //middleware, que converte as requisições enviadas como String em json para o servidor
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
function buscaLivro(id)
{
   return livros.findIndex(livro=>
    {
        return livro.id === Number(id);
    });
}


app.get("/", (req, res) =>{
res.status(200).send("curso de node.js");
});

app.get("/livros", (req, res) =>
    {
        res.status(200).json(livros);
        
    });

app.post("/livros", (req, res) =>
    {
        livros.push(req.body);
        res.status(201).send("livro enviado");
    });

app.delete("/livros", (req, res) =>
    {
        livros.pop();
        res.status(200).send("boa, deletou");
    });
app.get("/livros/:id", (req, res) =>
    {
        const index = buscaLivro(req.params.id);
        res.status(200).json(livros[index]);
    });
app.put("/livros/:id", (req, res) =>
    {
        const index = buscaLivro(req.params.id);
        livros[index].Nome =req.body.Nome;
        res.status(200).json(livros);
    });
export default app;