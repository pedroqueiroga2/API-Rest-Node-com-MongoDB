import {livros} from '../models/index.js';
import NotFound from '../erros/NotFound.js';
class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = await livros.find()
        .populate('autor')
        .exec();
      if(livrosResultado !==0)
      {
        res.status(200).json(livrosResultado);
      }
      else{
        next(new NotFound('Você não possui livros cadastrados em seu banco'));
      }

      
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultados = await livros.findById(id)
        .populate('autor', 'nome')
        .exec();

      if (livroResultados !== null) {
        res.status(200).send(livroResultados);
      }
      else {
        next(new NotFound('Id passado como parâmetro incorreto'));
      }


    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);
      
      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livrosResultado = await livros.findByIdAndUpdate(id, { $set: req.body });

      if (livrosResultado !== null) {
        res.status(200).send({ message: 'Livro atualizado com sucesso' });
      }
      else {
        next(new NotFound('Id passado como parâmetro incorreto'));
      }

      
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livrosResultado = await livros.findByIdAndDelete(id);

      if (livrosResultado !== null) {
        res.status(200).send({ message: 'Livro removido com sucesso' });
      }
      else {
        next(new NotFound('Id passado como parâmetro incorreto'));
      }

    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const {editora, titulo} = req.query;

      const busca= {};
      if(editora) busca.editora = editora;
      if(titulo) busca.titulo = titulo;
      const livrosResultado = await livros.find(busca);
      if (livrosResultado !== null) {
        res.status(200).send(livrosResultado);
      }
      else {
        next(new NotFound('A Editora não existe'));
      }


    } catch (erro) {
      next(erro);
    }
  };



}

export default LivroController;