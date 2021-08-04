const mongoose = require('../../database')

const ColaboradorSchema = new mongoose.Schema({

    nmColaborador: {
        type: String,
        require: true,
    },
    cpf: {
        type: String,
        require: true,
        unique: true,
    },
    dtNascimento: {
        type: String,
        require: true,
    },
    telefone:String,
    
    email: String,
   
    funcao:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Funcao',
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
    },


});

const Colaborador = mongoose.model('Colaborador', ColaboradorSchema);

module.exports = Colaborador;