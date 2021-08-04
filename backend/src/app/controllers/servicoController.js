const express = require('express');
const Servico = require('../models/servico');


const router = express.Router();

router.post('/', async (req, res) => {

    const {
        nmServico
    } = req.body;

    try {

        if (await Servico.findOne({
            nmServico
        }))
        return res.status(400).send({
            mensagem: 'Servico ja cadastrado!!'
        });
        

        const servico = await Servico.create(req.body);

        return res.send({
            servico
        })        


    } catch (err) {
        console.log(err)
        return res.status(400).send({
            mensagem: 'Falha ao registrar uma nova servico'
        });
    }


});

router.get('/', async (req, res) => {

    try {
        
        const servico = await Servico.find();
        
        return res.send({ servico });

    } catch (err) {
        return res.send({ mensagem: "Erro ao fazer a busca!!" })
    }
});

router.get('/:servicoId', async (req, res) => {

    try {

        const servico = await Servico.findById(req.params.servicoId);

        return res.send({ servico });
        
    } catch (err) {
        return res.send({ mensagem: "Erro ao buscar Id"})
    }
});

router.put('/:servicoId', async (req, res) => {

    try {
        
        const { nmServico,dsServico, snAtivo } = req.body;
        
        const servico = await Servico.findByIdAndUpdate(req.params.servicoId, {nmServico,dsServico, snAtivo}, {new: true});

        return res.send({ servico });


    } catch (err) {
        return res.send({ mensagem: "Erro ao atualizar !!"});
    }

});

router.delete('/:servicoId', async (req, res) => {

    try {
        
        await Servico.findOneAndRemove(req.params.servicoId);
        
        return res.send({ mensagem: "Deletado com Sucesso !!"})

    } catch (err) {
        return res.send( { mensagem: "Erro ao Deletar !!"});
    }

})

module.exports = app => app.use('/servico', router);