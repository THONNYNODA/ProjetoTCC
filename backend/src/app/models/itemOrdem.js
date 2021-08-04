const mongoose = require('../../database')

const ItemOrdemSchema = new mongoose.Schema({
    
    dtCriado: {
        type: Date,
        default: Date.now,
    },
    dtInicio:{
        type: String,
        //require: true,
    },
    dtFinal:{
        type: String,
        //require: true,
    },
    hrInicio:{
        type: String,
        //require: true,
    },
    hrFinal:{
        type: String,
        //require: true,
    },
    dsServicoRealizado:{
        type: String,
        require: true,
    },
    idUsuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true,
    },
    idOrdem:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ordem',
        require: true,
    },
    idServico:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servico',
        //require: true,
    },
})

const ItemOrdem = mongoose.model('ItemOrdem', ItemOrdemSchema);

module.exports = ItemOrdem;