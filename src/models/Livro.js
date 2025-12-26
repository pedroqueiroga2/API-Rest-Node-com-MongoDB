import mongoose from 'mongoose';
import { autores } from './Autor.js';
const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: { type: String, required: [true, 'O Titulo é obrigatório'] },
    editora: { type: String, required: [true, 'A Editora é obrigatório'] },
    numeroPaginas: {
      type: Number,
      min: [10, 'O número de página fornecidos ({VALUE}) deve estar entre 10 e 1500.'],
      max: [1500, 'O número de página fornecidos ({VALUE}) deve estar entre 10 e 1500.']
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'autores',
      required:true,
      validate:
      {
        validator: async function(id) {
          return await autores.exists({_id:id});
        },
        message: 'O autor não existe'
      }

    }
  }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;