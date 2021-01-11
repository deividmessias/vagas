  
const mongoose = require ('mongoose');

const DataSchena = new mongoose.Schema({
    nome:{type: String, required: true},
    idade: {type: Number},
    genero:{type: String, enum: ['M','F','O'], required: true},
    email:{type: String, required: true},
},{
    timestamps:true
});

const usuario = mongoose.model('Usuario',DataSchena);
module.exports = usuario;