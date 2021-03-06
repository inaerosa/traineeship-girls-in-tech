const data = require('./../data.json')
let establishments = data
const Exception = require('./../errors/Exception')

class merchantController{
    static showAll(req, res){
        return res.json(establishments)
    }

    static getBranch(req, res){
        let filtrered = establishments.filter(merchant => merchant.branch == true)
        return res.json(filtrered)
    }

    static getHeadOffice(req, res){
        var filtrered = establishments.filter(merchant => merchant.branch == false)
        return res.json(filtrered)
    }

    static getMerchantById(req, res){
        try{
            const {id} = req.params;
            const establhisment = establishments.find(establhisment => establhisment.id == id)
            if (establhisment == undefined){
                throw Exception.notFound('Establhisment not found')
             }
            res.status(200).json(establhisment)
        } catch(err){
            res.send(err.status).json(err.message)
        }
    }

    static postMerchant(req,res){
        try{
            let establishment = req.body;
            establishments.push(establishment)
            res.status(200).send(establishment)
        } catch(err){
            res.status(500).send({message: `${err.message} - Error to POST establhisment`})
        }
    }

    static updateStatus(req, res){
        try{
            const {id} = req.params;
            const index = establishments.findIndex(merchant => merchant.id == Number(id))
            const {status} = req.body            
            if(index == -1){
                throw Exception.notFound('ID not found')
            }
            if (status != 'OPEN' && status != 'CLOSED'){
                throw Exception.invalidData('Status must be OPEN or CLOSED')
            }
            return res.json(establishments[index].status = status)
        } catch(err){
            return res.status(err.status).send({message: err.message})
        }
    }

    static deleteMerchant(req, res){
        try{
            const {id} = req.params;
            const index = establishments.findIndex(merchant => merchant.id == Number(id))
            if (index == -1){
               throw Exception.notFound('ID not found')
            }
            establishments.splice(index, 1);
            return res.status(200).send({message: `Success to delete establishment`}) 
        } catch(err){
            return res.status(err.status).send({message: err.message})
        }
    }

    static sendMessage(req, res){
        try{
            const {id} = req.params;
            const {message} = req.body;
            const index = establishments.findIndex(merchant => merchant.id == Number(id))
            if(index == -1){
                throw Exception.notFound('ID not found')
            }
            const merchant = establishments[index]
            const branch = establishments.find(establhisment => establhisment.id == merchant.branchId)
            if (branch == undefined){
                throw Exception.notFound('Establhisment not found')
             }
            const date = {
                message,
                date: new Date().toISOString()
            }
            branch.messages.push(date)
            return res.status(200).json(branch.messages)
        }catch(err){
            return res.status(err.status).send({message: err.message})
        }
    }
}

module.exports = merchantController