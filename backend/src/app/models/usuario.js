const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const UsuarioSchema = new mongoose.Schema({
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
  telefone: String,
  email: String,

  funcao: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Funcao",
  },
  dsSenha: {
    type: String,
    require: true,
    select: false,
  },
  snPermissao: {
    type: String,
    default: "USUARIO",
    uppercase: true,
    enum: ["ADMIN", "PRESTADOR", "USUARIO"],
  },
  snAtivo: {
    type: Boolean,
    require: true,
    default: true,
  },
  dtCriacao: {
    type: Date,
    default: Date.now,
  },
});

UsuarioSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.dsSenha, 10);
  this.dsSenha = hash;

  next();
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
