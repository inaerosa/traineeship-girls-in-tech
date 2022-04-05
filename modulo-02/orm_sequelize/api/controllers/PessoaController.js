const database = require('../models')

class PessoaController{
    static async pegaTodasAsPessoas(req, res) {
        try{
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res){
        const {id} = req.params
        try{
            const pessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(pessoa)
        }catch(err){
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res){
        const novaPessoa = req.body;
        try{
             const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
             return res.status(200).json(novaPessoaCriada)
        }catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async atualizaPessoa(req, res){
        const { id } = req.params;
        const novasInfo = req.body;
        try{
            await database.Pessoas.update(novasInfo, {where: {id: Number(id)}})
            const pessoaAtualizada = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)
        }catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async deletaPessoa(req, res){
        const {id} = req.params;
        try{
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `O ID ${id} foi deletado`})
        }catch(err){
            return res.status(500).json(err.message)
        }
    }
}

module.exports = PessoaController