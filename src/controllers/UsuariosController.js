const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');
const Contato = require('../models/Contato');

module.exports = {
    
    async index(req,res){
        try {
                const usuarios = await Usuario.find();
                return res.json(usuarios);
            } catch (error) {
                return res.json(error).status(400);
        }
    },
    
    async create(req,res){
        try {
            const {email}=req.body;
            const emailExiste = await Usuario.findOne({email});

            if(emailExiste){
                return res.json({error: 'E-mail já existente!'}).status(400);
            }

            const usuario = await Usuario.create(req.body);
            return res.json(usuario).status(201);

        } catch (error) {
            return res.json(error).status(400);
        }
    },
    async details(req,res){
        try {
            const {id} = req.params;
            const usuarioExiste = await Usuario.findById(id);

            if(!usuarioExiste){
                return res.json({error: 'Usuário não existe!'}).status(400);
            }
        
            const enderecos = await Endereco.find({usuario_id: usuarioExiste._id});
            const contatos = await Contato.find({usuario_id: usuarioExiste._id});

            return res.json({usuario:{ ...usuarioExiste.toJSON(), enderecos, contatos }});
        } catch (error) {
            return res.json(error).status(400);
        }
    },
    
    async delete(req, res){
        try {
            const {id} = req.params;
            const usuarioExiste = await Usuario.findById(id);
            if(!usuarioExiste){
                return res.json({error: 'Usuário não existe!'}).status(400);
            }
            const usuario = await Usuario.findByIdAndDelete(id);
            return res.json(usuario);
        } catch (error) {
            return res.json(error).status(400);
        }
    },
    async update(req, res){
        try {
            const {id} = req.params;
            const {email} = req.body;
            const emailExiste = await Usuario.findOne({email});
            const usuarioExiste = await Usuario.findById(id);
            
            if(!usuarioExiste){
                return res.json({error: 'Usuário não existe!'}).status(400);
            }
            if(emailExiste && usuarioExiste.id !== emailExiste.id){
                return res.json({error: 'E-mail já existente!'}).status(400);
            }

            const usuario = await Usuario.findByIdAndUpdate(id,req.body, {new:true});
            return res.json(usuario);
        } catch (error) {
            return res.json(error).status(400);
        }
        

    }
}