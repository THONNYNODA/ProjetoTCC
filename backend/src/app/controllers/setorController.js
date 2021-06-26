const express = require('express');
const Setor = require('../models/setor');


const router = express.Router();

router.post('/', async (req, res) => {

    const {
        nmSetor
    } = req.body;

    try {

        if (await Setor.findOne({
            nmSetor
        }))
        return res.status(400).send({
            mensagem: 'Setor ja cadastrado!!'
        });
        

        const setor = await Setor.create(req.body);

        return res.send({
            setor
        })        


    } catch (err) {
        console.log(err)
        return res.status(400).send({
            mensagem: 'Falha ao registrar uma nova setor'
        });
    }


});

router.get('/', async (req, res) => {

    try {
        
        const setor = await Setor.find();
        
        return res.send({ setor });

    } catch (err) {
        return res.send({ mensagem: "Erro ao fazer a busca!!" })
    }
});

router.get('/:setorId', async (req, res) => {

    try {

        const setor = await Setor.findById(req.params.setorId);

        return res.send({ setor });
        
    } catch (err) {
        return res.send({ mensagem: "Erro ao buscar Id"})
    }
});

router.put('/:setorId', async (req, res) => {

    try {
        
        const { nmSetor, snAtivo } = req.body;
        
        const setor = await Setor.findByIdAndUpdate(req.params.setorId, {nmSetor, snAtivo}, {new: true});

        return res.send({ setor });


    } catch (err) {
        return res.send({ mensagem: "Erro ao atualizar !!"});
    }

});

router.delete('/:setorId', async (req, res) => {

    try {
        
        await Setor.findOneAndRemove(req.params.setorId);
        
        return res.send({ mensagem: "Deletado com Sucesso !!"})

    } catch (err) {
        return res.send( { mensagem: "Erro ao Deletar !!"});
    }

})

module.exports = app => app.use('/setor', router);