const mongoose = require ('mongoose');

const DataSchena = new mongoose.Schema({
    usuario_id: {type: mongoose.Types.ObjectId, required: true},
    cel:{type: String, required: true},
},{
    timestamps:true
});

const contato = mongoose.model('Contato',DataSchena);
module.exports = contato;