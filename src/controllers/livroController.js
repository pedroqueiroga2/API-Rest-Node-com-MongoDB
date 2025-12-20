import livro from "../models/Livro.js";
import {autor} from "../models/Autor.js"
class LivroController {
    static async listarLivros(req, res) {
        const listalivros = await livro.find({});
        res.status(200).json(listalivros);
    }

     static async listarLivroPorId(req, res) {
        const id = req.params.id;
        const listaLivro = await livro.findById(id);
        res.status(200).json(listaLivro);
    }

    static async cadastrarLivro(req, res)
    {
        const novolivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novolivro.autor);
            const livroCompleto = {...novolivro, autor: {...autorEncontrado._doc}}
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Criado com sucesso", livro: novolivro });
        }
        catch(erro)
        {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` })
        }
        
    }

     static async atualizarLivro(req, res) {
        const id = req.params.id;
        await livro.findByIdAndUpdate(id, req.body);
        res.status(200).json({message:"livro atualizado"});
    }

    static async deletarLivro(req, res) {
        const id = req.params.id;
        await livro.findByIdAndDelete(id);
        res.status(200).json({message:"livro deletado"});
    }
};



export default LivroController;