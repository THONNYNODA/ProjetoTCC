const mongoose = require('../../database')

const FuncaoSchema = new mongoose.Schema({

    nmFuncao: {
        type: String,
        require: true,
    },
    snAtivo: {
        type: Boolean,
        require: true,
        default: true,
    },



});

const Funcao = mongoose.model('Funcao', FuncaoSchema);

module.exports = Funcao;