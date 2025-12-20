import { autor } from "../models/Autor.js";

class autorController
{
    static async criarAutor(req, res)
    {
        const novoautor = await autor.create(req.body);
        res.status(200).json({message:"criado com sucesso"});
    }
    static async listarAutor(req, res){
        
        res.status(200).json(await autor.find({}));
    }
    static async listarAutorporId(req, res)
    {
        const id = req.params.id;
        const listaAutor = await autor.findById(id);
        res.status(200).json(listaAutor);
    }
}

export default autorController;