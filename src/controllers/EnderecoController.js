const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');

module.exports = {    
    async create(req,res){
        try {
            const {usuario_id}=req.body;
            const usuarioExiste = await Usuario.findById({_id:usuario_id});

            if(!usuarioExiste){
                return res.json({error: 'Usuário não existente!'}).status(400);
            }

            const endereco = await Endereco.create(req.body);
            return res.json(endereco).status(201);

        } catch (error) {
            return res.json(error).status(400);
        }
    },
    async details(req,res){
        try {
            const {id} = req.params;
            const enderecoExiste = await Endereco.findById(id);
            
            if(!enderecoExiste){
                return res.json({error: 'Endereço não existe!'}).status(400);
            }
            
            const endereco = await Endereco.findById(id);
            return res.json(endereco);
        } catch (error) {
            return res.json(error).status(400);
        }
    },
    
    async delete(req, res){
        try {
            const {id} = req.params;
            const enderecoExiste = await Endereco.findById(id);
            if(!enderecoExiste){
                return res.json({error: 'Endereço não existe!'}).status(400);
            }
            const endereco = await Endereco.findByIdAndDelete(id);
            return res.json(endereco);
        } catch (error) {
            return res.json(error).status(400);
        }
    },
    async update(req, res){
        try {
            const {id} = req.params;
 
            const enderecoExiste = await Endereco.findById(id);
            if(!enderecoExiste){
                return res.json({error: 'Endereço não existe!'}).status(400);
            }
           
            const endereco = await Endereco.findByIdAndUpdate(id,req.body, {new:true});
            return res.json(endereco);
        } catch (error) {
            return res.json(error).status(400);
        }
        

    }
}