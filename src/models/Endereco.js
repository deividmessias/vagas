const mongoose = require ('mongoose');

const DataSchena = new mongoose.Schema({
    usuario_id: {type: mongoose.Types.ObjectId, required: true},
    rua:{type: String, required: true},
    numero:{type: String, required: true},
    bairro:{type: String, required: true},
    cidade:{type: String, required: true},
    estado:{type: String, required: true},
    pais:{type: String, required: true},
    cep:{type: String, required: true},
},{
    timestamps:true
});

const endereco = mongoose.model('Endereco',DataSchena);
module.exports = endereco;