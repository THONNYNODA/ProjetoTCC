const express = require("express");
const ItemOrdem = require("../models/itemOrdem");
const authMiddleware = require("../middlewares/autenticacao");

const router = express.Router();

router.use(authMiddleware);

router.post("/", async (req, res) => {
  try {
    const itemOrdem = await ItemOrdem.create(req.body, {
      idUsuario: req.usuarioId,
    }).populate(["idUsuario", "idSetor", "idOrdem", "idServico"]);

    return res.send({
      itemOrdem,
    });
  } catch (err) {
    return res.status(401).send({
      mensagem: "Falha ao registrar uma nova funcao",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const itemOrdem = await ItemOrdem.find().populate([
      "idUsuario",
      "idSetor",
      "idOrdem",
      "idServico",
    ]);
    return res.send({
      itemOrdem,
    });
  } catch (err) {
    return res.status(400).send({
      mensagem: "Falha ao buscar o Item!!",
    });
  }
});

router.get("/:itemordemId", async (req, res) => {
  try {
    const itemOrdem = await ItemOrdem.findById(req.params.itemordemId).populate(
      ["idUsuario", "idSetor", "idOrdem", "idServico"]
    );
    return res.send({
      itemOrdem,
    });
  } catch (err) {
    return res.status(400).send({
      mensagem: "Falha ao buscar o Item Id!!",
    });
  }
});

router.put("/:itemordemId", async (req, res) => {
  try {
    const { dtInicio, dtFinal, dsServicoRealizado, idServico } = req.body;

    const itemOrdem = await ItemOrdem.findByIdAndUpdate(
      req.params.itemordemId,
      { dtInicio, dtFinal, dsServicoRealizado, idServico },
      { new: true }
    );

    return res.send({ itemOrdem });
  } catch (err) {
    return res.send({ mensagem: "Erro ao atualizar !!" });
  }
});

router.delete("/:itemordemId", async (req, res) => {
  try {
    await ItemOrdem.findOneAndRemove(req.params.itemordemId);

    return res.send({ mensagem: "Deletado com Sucesso !!" });
  } catch (err) {
    return res.send({ mensagem: "Erro ao Deletar !!" });
  }
});

module.exports = (app) => app.use("/itemordem", router);
