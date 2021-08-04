const mongoose = require('../../database')

const SetorSchema = new mongoose.Schema({
    
    nmSetor:{
        type: String,
        require: true,
    },
    snAtivo:{
        type: Boolean,
        require: true,
        default: true,
    }
})

const Setor = mongoose.model('Setor', SetorSchema);

module.exports = Setor;