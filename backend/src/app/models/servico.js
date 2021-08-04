const mongoose = require('../../database')

const ServicoSchema = new mongoose.Schema({
    
    nmServico:{
        type: String,
        require: true,
    },
    dsServico:{
        type: String,
    },
    snAtivo:{
        type: Boolean,
        require: true,
        default: true
    }
})

const Servico = mongoose.model('Servico', ServicoSchema);

module.exports = Servico; 