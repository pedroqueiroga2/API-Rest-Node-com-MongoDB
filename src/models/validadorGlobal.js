import mongoose from 'mongoose';

mongoose.Schema.Types.String.set('validate', {
  validator: (valor) => valor.trim() !== '',
  message: ({ path }) => `O valor fornecido em ${path} é um valor em branco.`
});