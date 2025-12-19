import livro from "../models/Livro.js";

class LivroController {
    static async listarLivros(req, res) {
        const listalivros = await livro.find({});
        res.status(200).json(listalivros);
    }
    static async cadastrarLivro(req, res)
    {
        try{
            const novolivre = await livro.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", livro: novolivro });
        }
        catch(erro)
        {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` })
        }
        
    }
};



export default LivroController;