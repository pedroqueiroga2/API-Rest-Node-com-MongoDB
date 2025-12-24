import mongoose from "mongoose"

function manipuladorDeErros(erro, req, res, next) {//middleware de erro

    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: "um ou mais parâmetros foram informados de forma inválida" });
    }
    else if(erro instanceof mongoose.Error.ValidationError)
        {
            const mensagemError = Object.values(erro.errors).map(erro => erro.message).join("; ");
            res.status(400).send({message: `Os seguintes erros foram encontrados: ${mensagemError}` })
        }
    else {
        res.status(500).send({ message: "erro interno de servidor." });
    }
}


export default manipuladorDeErros;