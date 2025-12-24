import mongoose from "mongoose"

function manipuladorDeErros(erro, req, res, next) {//middleware de erro

    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: "um ou mais parâmetros foram informados de forma inválida" });
    }
    else if(erro instanceof mongoose.Error.ValidationError)
        {
            console.log(erro.errors);
            res.status(400).send({message: "Houve um erro de validação de dados"})
        }
    else {
        res.status(500).send({ message: "erro interno de servidor." });
    }
}


export default manipuladorDeErros;