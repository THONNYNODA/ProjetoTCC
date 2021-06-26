const mongoose = require('../../database')

const OrdemSchema = new mongoose.Schema({
    
    dtCriado:{
        type: Date,
        date: Date.now,
    },
    dtInicioOrdem:{
        type: Date,
        require: true,
    },
    dtFinalOrdem:{
        type: Date,
        require: true,
    },
    dsStatus:{
        type: Date,
        require: true,
    },
    dsProblema:{
        type: String,
        require: true,
    },
    idColaborador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
        require: true,
    },
    idSetor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Setor',
        require: true,
    },
    idItemOrdem:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ItemOrdem',
    },
})

const Ordem = mongoose.model('Ordem', OrdemSchema);

module.exports = Ordem;