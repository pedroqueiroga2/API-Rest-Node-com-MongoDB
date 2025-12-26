
import { autores } from '../models/index.js';
import NotFound from '../erros/NotFound.js';
class AutorController {

  static listarAutores = async (req, res, next) => {
    try {
      const autoresResultado = await autores.find();
      if (autoresResultado == 0) {
        next(new NotFound('Você não possui autor cadastrados em seu banco'));
      }
      res.status(200).json(autoresResultado);

    } catch (erro) {
      next(erro);
    }
  };
  static listarAutoresPorFiltro = async (req, res, next) => {
    try {
      const nome = req.query.nome;
      const resultado = await autores.find({nome: nome});
      res.status(200).send(resultado);
    } catch(erro) {
      next(erro);
    }
  };

  static listarAutorPorId = async (req, res, next) => {

    try {
      const id = req.params.id;

      const autorResultado = await autores.findById(id);
      if (autorResultado !== null) {
        res.status(200).send(autorResultado);
      }
      else {
        next(new NotFound('Id do Autor não localizado.'));
      }
    } catch (erro) {

      next(erro);
    }
  };


  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new autores(req.body);


      const autorResultado = await autor.save();

      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };


  static atualizarAutor = async (req, res, next) => {
    try {

      const id = req.params.id;

      const autorEncontrado = await autores.findByIdAndUpdate(id, { $set: req.body });
      if (autorEncontrado !== null) {
        res.status(200).send({ message: 'Autor atualizado com sucesso' });
      }
      else {
        next(new NotFound('Id passado como parâmetro incorreto'));
      }




    } catch (erro) {
      next(erro);
    }
  };

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autorEncontrado = await autores.findByIdAndDelete(id);
      if (autorEncontrado !== null) {
        res.status(200).send({ message: 'Autor removido com sucesso' });
      }
      else {
        next(new NotFound('Id passado como parâmetro incorreto'));
      }


    } catch (erro) {
      next(erro);
    }
  };


}

export default AutorController;