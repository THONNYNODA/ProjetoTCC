const express = require('express');
const Ordem = require('../models/ordem');
const ItemOrdem = require('../models/itemOrdem');
const authMiddleware = require('../middlewares/autenticacao') 


const router = express.Router();

router.use(authMiddleware)

router.post('/', async (req, res) => {

    const {dtInicioOrdem,dtFinalOrdem,dsProblema,dsDetalhe,idItemOrdem,idSetor} = req.body

    try {
        const ordem = await Ordem.create({dsProblema,dsDetalhe,dtInicioOrdem,dtFinalOrdem,idSetor, idUsuario: req.usuarioId});

        if(!idItemOrdem === null)
        return await Promise.all(
            idItemOrdem.map( async itensOrdem =>{
                const ordemItem = new ItemOrdem({ ...itensOrdem, idOrdem: ordem._id});
    
                await ordemItem.save();
                
                ordem.idItemOrdem.push(ordemItem)
            })
        );
        
        await ordem.save();

        return res.send({ordem});

    } catch (err) {
        console.log(err)
        return res.status(400).send({mensagem: "Erro ao Criar Ordem"})
    }
});

router.get('/', async (req, res) => {
    try {
        const ordem = await Ordem.find().populate(['idUsuario','idSetor','idItemOrdem']);

        return res.send({ordem});

    } catch (err) {
        return res.status(400).send({mensagem: "Erro ao Listar a Ordem"})
    }
})


router.get('/:ordemId', async (req, res) => {
    try {
        const ordem = await Ordem.findById(req.params.ordemId).populate(['idUsuario','idSetor','idItemOrdem']);

        return res.send({ordem});

    } catch (err) {
        return res.status(400).send({mensagem: "Erro ao Listar uma Ordem"})
    }
})
router.put('/:ordemId', async (req, res) => {
    const {dtInicioOrdem,dtFinalOrdem,dsProblema,dsDetalhe,idItemOrdem,dsStatus} = req.body

    try {
        const ordem = await Ordem.findByIdAndUpdate(req.params.ordemId,{
            dsProblema,
            dsDetalhe,
            dtInicioOrdem,
            dtFinalOrdem,
            dsStatus
            },{new:true}
        );

        ordem.idItemOrdem = [];
        await ItemOrdem.remove({ idOrdem: ordem._id})

        await Promise.all(
            idItemOrdem.map( async itensOrdem =>{
                const ordemItem = new ItemOrdem({ ...itensOrdem, idOrdem: ordem._id});
    
                await ordemItem.save();
                
                ordem.idItemOrdem.push(ordemItem)
            })
        );
        
        await ordem.save();

        return res.send({ordem});

    } catch (err) {
        console.log(err)
        return res.status(400).send({mensagem: "Erro ao Atualizar Ordem"})
    }
})


router.delete('/:ordemId', async (req, res) => {
    try {
         await Ordem.findByIdAndRemove(req.params.ordemId);

        return res.send({mensagem: "Deletado com sucesso"});

    } catch (err) {
        return res.status(400).send({mensagem: "Erro ao deletar a Ordem"})
    }
})

module.exports = app => app.use('/ordem', router);