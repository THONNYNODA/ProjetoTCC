const express = require('express');
const Funcao = require('../models/funcao');


const router = express.Router();
router.post('/', async (req, res) => {

    const {
        nmFuncao
    } = req.body;

    try {

        if (await Funcao.findOne({
                nmFuncao
            }))
            return res.status(400).send({
                mensagem: 'Funcao ja cadastrado!!'
            });


        const funcao = await Funcao.create(req.body);

        return res.send({
            funcao
        })


    } catch (err) {
        return res.status(401).send({
            mensagem: 'Falha ao registrar uma nova funcao'
        });
    }


});

router.get('/', async (req, res) => {
    try {

        const funcao = await Funcao.find()
        return res.send({
            funcao
        });

    } catch (err) {
        return res.status(400).send({
            mensagem: 'Falha ao buscar o Item!!'
        });

    }
})


router.get('/:funcaoId', async (req, res) => {

    try {

        const funcao = await Funcao.findById(req.params.funcaoId);
        return res.send({
            funcao
        });

    } catch (err) {
        return res.status(400).send({
            mensagem: 'Falha ao buscar o Item Id!!'
        });
    }
})

router.put('/:funcaoId', async (req,res) =>{

    try {
        const { nmFuncao, snAtivo } = req.body

        const funcao = await Funcao.findByIdAndUpdate(req.params.funcaoId, {nmFuncao,snAtivo},{new:true});

        return res.send({ funcao })

        
    } catch (err) {
        console.log(err)
        return res.send({ mensagem: "Erro ao Atualizar"})
        
    }
})

router.delete('/:funcaoId', async (req, res) => {

    try {

        await Funcao.findByIdAndRemove(req.params.funcaoId);
        return res.send({ mensagem: "Funcao removido!!"})

    } catch (err) {
        return res.send({
            mensagem: "Erro ao deletar"
        })
    }

})

module.exports = app => app.use('/funcao', router);