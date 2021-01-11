const Usuario = require('../models/Usuario');
const Contato = require('../models/Contato');

module.exports = {    
    async create(req,res){
        try {
            const {usuario_id}=req.body;
            const usuarioExiste = await Usuario.findById({_id:usuario_id});

            if(!usuarioExiste){
                return res.json({error: 'Usuário não existente!'}).status(400);
            }

            const contato= await Contato.create(req.body);
            return res.json(contato).status(201);

        } catch (error) {
            return res.json(error).status(400);
        }
    },
    async details(req,res){
        try {
            const {id} = req.params;
            const contatoExiste = await Contato.findById(id)
            
            if(!contatoExiste){
                return res.json({error: 'Contato não existe!'}).status(400);
            }
            
            const contato= await Contato.findById(id);
            return res.json(contato);
        } catch (error) {
            return res.json(error).status(400);
        }
    },
    
    async delete(req, res){
        try {
            const {id} = req.params;
            const contatoExiste = await Contato.findById(id);
            if(!contatoExiste){
                return res.json({error: 'Contato não existe!'}).status(400);
            }
            const contato = await Contato.findByIdAndDelete(id);
            return res.json(contato);
        } catch (error) {
            return res.json(error).status(400);
        }
    },
    async update(req, res){
        try {
            const {id} = req.params;
 
            const contatoExiste = await Contato.findById(id);
            if(!contatoExiste){
                return res.json({error: 'Contato não existe!'}).status(400);
            }
           
            const contato = await Contato.findByIdAndUpdate(id,req.body, {new:true});
            return res.json(contato);
        } catch (error) {
            return res.json(error).status(400);
        }
        

    }
}