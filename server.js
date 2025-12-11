import http from "http";
const PORT = 3000;
const rotas = 
{
    "/node": "Curso de node.js",
    "/Livros": "achou a livraria",
    "/Atores": "Que isso, é Hollywood?"
}
const server = http.createServer((req, res) =>
    {
        res.writeHead(200, {"Content-Type": "text/plan"});
        res.end(rotas[req.url]);
    }
);

server.listen(PORT, () =>{
    console.log("servidor escutando!");

});
