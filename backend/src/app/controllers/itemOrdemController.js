const express = require('express');
const ItemOrdem = require('../models/itemOrdem');


const router = express.Router();
// router.post('/', async (req, res) => {

// });

router.get('/', async (req, res) => {
    try {

        const itemOrdem = await ItemOrdem.find()
        return res.send({
            itemOrdem
        });

    } catch (err) {
        return res.status(400).send({
            mensagem: 'Falha ao buscar o Item!!'
        });

    }
})


router.get('/:itemordemId', async (req, res) => {

    try {

        const itemOrdem = await ItemOrdem.findById(req.params.itemordemId);
        return res.send({
            itemOrdem
        });

    } catch (err) {
        return res.status(400).send({
            mensagem: 'Falha ao buscar o Item Id!!'
        });
    }
})

// router.put('/:funcaoId', async (req,res) =>{

// })

// router.delete('/:funcaoId', async (req, res) => {

// })

module.exports = app => app.use('/itemordem', router);