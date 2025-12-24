import RequisicaoIncorreta from "./RequisicaoIncorreta.js"
class ErroValidacao extends RequisicaoIncorreta
{
     constructor(erro)
    {
         const mensagemError = Object.values(erro.errors).map(erro => erro.message).join("; ");
        super(`Os seguintes erros foram encontrados: ${mensagemError}`, 400);
    }

}

export default ErroValidacao;