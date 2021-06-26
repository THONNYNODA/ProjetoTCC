const express = require('express');
const Colaborador = require('../models/colaborador');


const router = express.Router();
router.post('/', async (req, res) => {

    const {
        cpf
    } = req.body;

    try {

        if (await Colaborador.findOne({
                cpf
            }))
            return res.status(400).send({
                mensagem: 'Colaborador ja cadastrado!!'
            });


        const colaborador = await Colaborador.create(req.body);

        return res.send({
            colaborador
        })


    } catch (err) {
        console.log(err)
        return res.status(401).send({
            mensagem: 'Falha ao registrar uma nova colaborador'
        });
    }


});

router.get('/', async (req, res) => {
    try {

        const colaborador = await Colaborador.find()
        return res.send({
            colaborador
        });

    } catch (err) {
        return res.status(400).send({
            mensagem: 'Falha ao buscar o Item!!'
        });

    }
})


router.get('/:colaboradorId', async (req, res) => {

    try {

        const colaborador = await Colaborador.findById(req.params.colaboradorId);
        return res.send({
            colaborador
        });

    } catch (err) {
        return res.status(400).send({
            mensagem: 'Falha ao buscar o Item Id!!'
        });
    }
})

router.put('/:colaboradorId', async (req,res) =>{

    try {
        const { nmColaborador, snAtivo } = req.body

        const colaborador = await Colaborador.findByIdAndUpdate(req.params.colaboradorId, {nmColaborador,snAtivo},{new:true});

        return res.send({ colaborador })

        
    } catch (err) {
        console.log(err)
        return res.send({ mensagem: "Erro ao Atualizar"})
        
    }
})

router.delete('/:colaboradorId', async (req, res) => {

    try {

        await Colaborador.findByIdAndRemove(req.params.colaboradorId);
        return res.send({ mensagem: "Colaborador removido!!"})

    } catch (err) {
        return res.send({
            mensagem: "Erro ao deletar"
        })
    }

})

module.exports = app => app.use('/colaborador', router);