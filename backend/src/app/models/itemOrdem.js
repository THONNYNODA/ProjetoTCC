const mongoose = require('../../database')

const ItemOrdemSchema = new mongoose.Schema({
    
    dtCriado:{
        type: Date,
        date: Date.now,
    },
    dtInicio:{
        type: Date,
        require: true,
    },
    dtFinal:{
        type: Date,
        require: true,
    },
    hrInicio:{
        type: Date,
        require: true,
    },
    hrFinal:{
        type: Date,
        require: true,
    },
    dsServicoRealizado:{
        type: Date,
        require: true,
    },
    idColaborador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
        require: true,
    },
    idServico:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servico',
        require: true,
    },
})

const ItemOrdem = mongoose.model('ItemOrdem', ItemOrdemSchema);

module.exports = ItemOrdem;