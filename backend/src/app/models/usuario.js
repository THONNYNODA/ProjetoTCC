const mongoose = require('../../database')
const bcrypt = require('bcryptjs');

const UsuarioSchema = new mongoose.Schema({

    nmUsuario: {
        type: String,
        require: true,
    },
    dsSenha: {
        type: String,
        require: true,
        select:false
        
    },
    snAtivo: {
        type: Boolean,
        require: true,
        default:true
    },
    dtCriacao: {
        type: Date,
        default: Date.now,
    },
    
    

});

UsuarioSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.dsSenha, 10);
    this.dsSenha = hash;

    next();
})

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;