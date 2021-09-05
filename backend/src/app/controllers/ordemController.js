const express = require("express");
const Ordem = require("../models/ordem");
const ItemOrdem = require("../models/itemOrdem");
const authMiddleware = require("../middlewares/autenticacao");

const router = express.Router();

router.use(authMiddleware);

router.post("/", async (req, res) => {
  try {
    const {
      dtInicioOrdem,
      dtFinalOrdem,
      dsProblema,
      dsDetalhe,
      idItemOrdem,
      idSetor,
      dsStatus,
    } = req.body;

    const ordem = await Ordem.create({
      dsProblema,
      dsDetalhe,
      dtInicioOrdem,
      dtFinalOrdem,
      idSetor,
      dsStatus,
      idUsuario: req.usuarioId,
    });

    // await Promise.all(
    //   idItemOrdem.map(async (itensOrdem) => {
    //     const ordemItem = new ItemOrdem({
    //       ...itensOrdem,
    //       idOrdem: ordem._id,
    //     });

    //     await ordemItem.save();

    //     ordem.idItemOrdem.push(ordemItem);
    //   })
    // );

    await ordem.save();

    return res.send({ ordem });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ mensagem: "Erro ao Criar Ordem" });
  }
});

router.get("/", async (req, res) => {
  try {
    const ordem = await Ordem.find().populate([
      "idUsuario",
      "idSetor",
      "idItemOrdem",
    ]);
    const ordemItem = await ItemOrdem.find().populate([
      "idUsuario",
      "idServico",
      "idItemOrdem",
    ]);

    return res.send({ ordem, ordemItem });
  } catch (err) {
    return res.status(400).send({ mensagem: "Erro ao Listar a Ordem" });
  }
});

router.get("/:ordemId", async (req, res) => {
  try {
    const ordem = await Ordem.findById(req.params.ordemId).populate([
      "idUsuario",
      "idSetor",
      "idItemOrdem",
    ]);

    return res.send({ ordem });
  } catch (err) {
    return res.status(400).send({ mensagem: "Erro ao Listar uma Ordem" });
  }
});
router.put("/:ordemId", async (req, res) => {
  try {
    const { dtInicioOrdem, dtFinalOrdem, dsStatus, idItemOrdem } = req.body;

    const ordem = await Ordem.findByIdAndUpdate(
      req.params.ordemId,
      {
        dtInicioOrdem,
        dtFinalOrdem,
        dsStatus,
      },
      { new: true }
    );

    //ordem.idItemOrdem = [];
    // await ItemOrdem.deleteMany({ idOrdem: ordem._id });

    // await Promise.all(

    //   idItemOrdem.map(async (itensOrdem) => {
    //     const ordemItem = new ItemOrdem({
    //       ...itensOrdem,
    //       idOrdem: ordem._id,
    //       idUsuario: req.usuarioId,
    //     });

    //     await ordemItem.save();

    //     ordem.idItemOrdem.push(ordemItem);
    //   })
    // );

    // await ordem.save();

    return res.send({ ordem });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ mensagem: "Erro ao Atualizar Ordem" });
  }
});
router.put("/itemOrdem/:ordemId", async (req, res) => {
  try {
    const { dtInicioOrdem, dtFinalOrdem, dsStatus, idItemOrdem } = req.body;

    const ordem = await Ordem.findByIdAndUpdate(req.params.ordemId);

    //ordem.idItemOrdem = [];
    // await ItemOrdem.deleteMany({ idOrdem: ordem._id });

    await Promise.all(
      idItemOrdem.map(async (itensOrdem) => {
        const ordemItem = new ItemOrdem({
          ...itensOrdem,
          idOrdem: ordem._id,
          idUsuario: req.usuarioId,
        });

        await ordemItem.save();

        ordem.idItemOrdem.push(ordemItem);
      })
    );

    await ordem.save();

    return res.send({ ordem });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ mensagem: "Erro ao Atualizar Ordem" });
  }
});

router.delete("/:ordemId", async (req, res) => {
  try {
    Ordem.idItemOrdem = [];
    await ItemOrdem.deleteMany({ idOrdem:req.params.ordemId });

    await Ordem.findByIdAndRemove(req.params.ordemId);

    return res.send({ mensagem: "Deletado com sucesso" });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ mensagem: "Erro ao deletar a Ordem" });
  }
});

module.exports = (app) => app.use("/ordem", router);
