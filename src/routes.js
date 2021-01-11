const express = require('express');
const routes = express.Router();
const Usuario = require('./controllers/UsuariosController')
const Endereco = require('./controllers/EnderecoController')
const Contato = require('./controllers/ContatoController')

//Rotas de Usuários
routes.post('/api/usuarios',Usuario.create);
routes.get('/api/usuarios',Usuario.index);
routes.get('/api/usuarios/:id',Usuario.details);
routes.delete('/api/usuarios/:id',Usuario.delete);
routes.put('/api/usuarios/:id',Usuario.update);

//Rotas Endereço
routes.post('/api/enderecos',Endereco.create);
routes.get('/api/enderecos/:id',Endereco.details);
routes.delete('/api/enderecos/:id',Endereco.delete);
routes.put('/api/enderecos/:id',Endereco.update);

//Rotas Contato
routes.post('/api/contatos',Contato.create);
routes.get('/api/contatos/:id',Contato.details);
routes.delete('/api/contatos/:id',Contato.delete);
routes.put('/api/contatos/:id',Contato.update);




module.exports = routes;