const mongoose = require("../../database");

const OrdemSchema = new mongoose.Schema({
  dtCriado: {
    type: Date,
    default: Date.now,
  },
  dtInicioOrdem: {
    type: String,
    require: true,
  },
  dtFinalOrdem: {
    type: String,
    require: true,
  },
  dsStatus: {
    type: String,
    default: "PENDENTE",
    uppercase: true,
    enum: ["FINALIZADO", "PENDENTE", "VERIFICANDO"],
  },

  dsProblema: {
    type: String,
    require: true,
  },
  dsDetalhe: {
    type: String,
    //require: true,
  },
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    require: true,
  },
  idSetor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Setor",
    require: true,
  },
  idItemOrdem:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ItemOrdem',

  }],
 
});

const Ordem = mongoose.model("Ordem", OrdemSchema);

module.exports = Ordem;
