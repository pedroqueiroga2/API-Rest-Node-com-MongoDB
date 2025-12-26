import ErroBase from './erroBase.js';

class NotFound extends ErroBase
{
  constructor(mensagem = 'Página não encontrada',) 
  {
    super(mensagem, 404);
  }
}

export default NotFound;